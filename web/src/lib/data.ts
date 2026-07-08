import { supabase } from './supabase'
import type { Day, Project, TermIndexEntry } from './types'

export type FeedSource = 'supabase' | 'dev'

export interface FeedData {
  days: Day[]
  terms: TermIndexEntry[]
  source: FeedSource
}

const termKey = (t: string) => t.trim().toLowerCase()

/** Günlerden küresel terim indeksi üretir (dev modda; Supabase modda DB'den gelir). */
function buildTermIndex(days: Day[]): TermIndexEntry[] {
  const idx = new Map<string, TermIndexEntry>()
  for (const day of days) {
    for (const p of day.projects) {
      for (const g of p.glossary) {
        let e = idx.get(g.key)
        if (!e) {
          e = { key: g.key, term: g.term, def: g.def, count: 0, projects: [] }
          idx.set(g.key, e)
        }
        e.count++
        e.projects.push({ id: p.id, name: p.name })
      }
    }
  }
  return [...idx.values()]
}

interface ProjectRow {
  id: string
  day_date: string
  name: string
  url: string
  stars: string | null
  language: string | null
  serves_md: string | null
  tech_md: string | null
  why_md: string | null
  evolve_md: string | null
  project_terms: { terms: { key: string; term: string; def_md: string } | null }[]
}

async function loadFromSupabase(): Promise<FeedData> {
  const { data, error } = await supabase!
    .from('projects')
    .select(
      'id, day_date, name, url, stars, language, serves_md, tech_md, why_md, evolve_md, project_terms(terms(key, term, def_md))'
    )
    .order('day_date', { ascending: false })
    .returns<ProjectRow[]>()
  if (error) throw new Error(`Feed yüklenemedi: ${error.message}`)

  const byDay = new Map<string, Project[]>()
  for (const row of data ?? []) {
    const project: Project = {
      id: row.id,
      dayDate: row.day_date,
      name: row.name,
      url: row.url,
      stars: row.stars,
      language: row.language,
      sections: {
        serves: row.serves_md,
        tech: row.tech_md,
        why: row.why_md,
        evolve: row.evolve_md,
      },
      glossary: (row.project_terms ?? [])
        .map((pt) => pt.terms)
        .filter((t): t is NonNullable<typeof t> => t != null)
        .map((t) => ({ key: t.key, term: t.term, def: t.def_md })),
    }
    const list = byDay.get(row.day_date) ?? []
    list.push(project)
    byDay.set(row.day_date, list)
  }
  const days: Day[] = [...byDay.entries()]
    .sort((a, b) => (a[0] < b[0] ? 1 : -1))
    .map(([date, projects]) => ({ date, projects }))

  return { days, terms: buildTermIndex(days), source: 'supabase' }
}

interface DevProject {
  name: string
  url: string
  stars?: string
  language?: string
  sections: { serves?: string; tech?: string; why?: string; evolve?: string }
  glossary: { term: string; def: string }[]
}

/** Supabase yapılandırılmadan önce yerel geliştirme için /dev-feed.json okur. */
async function loadFromDevFeed(): Promise<FeedData> {
  const res = await fetch('/dev-feed.json')
  if (!res.ok) throw new Error('dev-feed.json bulunamadı. `node pipeline/build-dev-feed.mjs` çalıştır.')
  const raw: { date: string; projects: DevProject[] }[] = await res.json()
  const days: Day[] = raw.map((day) => ({
    date: day.date,
    projects: day.projects.map((p) => ({
      id: `${day.date}::${p.name}`,
      dayDate: day.date,
      name: p.name,
      url: p.url,
      stars: p.stars ?? null,
      language: p.language ?? null,
      sections: {
        serves: p.sections.serves ?? null,
        tech: p.sections.tech ?? null,
        why: p.sections.why ?? null,
        evolve: p.sections.evolve ?? null,
      },
      glossary: p.glossary.map((g) => ({ key: termKey(g.term), term: g.term, def: g.def })),
    })),
  }))
  return { days, terms: buildTermIndex(days), source: 'dev' }
}

export function loadFeed(): Promise<FeedData> {
  return supabase ? loadFromSupabase() : loadFromDevFeed()
}

/** "2026-07-09" → "9 Temmuz 2026" */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
