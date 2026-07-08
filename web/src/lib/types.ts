export interface GlossaryEntry {
  key: string
  term: string
  def: string
}

export interface Project {
  id: string
  dayDate: string // YYYY-MM-DD
  name: string
  url: string
  stars: string | null
  language: string | null
  sections: {
    serves: string | null
    tech: string | null
    why: string | null
    evolve: string | null
  }
  glossary: GlossaryEntry[]
}

export interface Day {
  date: string // YYYY-MM-DD
  projects: Project[]
}

export interface TermIndexEntry {
  key: string
  term: string
  def: string
  count: number
  projects: { id: string; name: string }[]
}

export const SECTION_LABELS: Record<keyof Project['sections'], string> = {
  serves: '🎯 Neye hizmet ediyor?',
  tech: '🛠️ Hangi teknolojiler, neden ve nasıl?',
  why: '📈 Neden ilgi gördü / kime hitap ediyor?',
  evolve: '💡 Geliştirilse ne olur?',
}

export const SECTION_ORDER = ['serves', 'tech', 'why', 'evolve'] as const
