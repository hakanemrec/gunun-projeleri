import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useFeed } from '../context/FeedContext'
import { useSearch } from '../context/SearchContext'
import { ProjectCard } from '../components/ProjectCard'
import { formatDate } from '../lib/data'
import type { Project } from '../lib/types'

function Hero() {
  const { enabled, signIn } = useAuth()
  return (
    <section className="hero">
      <h1 className="hero-title">
        Her gün 5 dakika: trend projeleri oku, <em>jargonunu öğren</em>, quiz'le kalıcılaştır.
      </h1>
      <p className="hero-sub">
        d<em>ai</em>ly, GitHub Trending'i her sabah senin için okur: Türkçe derin analiz + her
        terimin sade açıklaması + aralıklı tekrar quiz'i.
      </p>
      <div className="hero-actions">
        {enabled && (
          <button className="btn btn-primary" onClick={signIn}>
            GitHub ile başla — ücretsiz
          </button>
        )}
        <Link to="/hakkinda" className="btn">
          Nasıl çalışır?
        </Link>
      </div>
    </section>
  )
}

export function projectMatches(p: Project, q: string): boolean {
  if (!q) return true
  const hay = [
    p.name,
    p.language ?? '',
    ...Object.values(p.sections).map((s) => s ?? ''),
    ...p.glossary.flatMap((g) => [g.term, g.def]),
  ]
    .join(' ')
    .toLowerCase()
  return hay.includes(q)
}

export function FeedPage() {
  const { feed, loading, error } = useFeed()
  const { user } = useAuth()
  const { query } = useSearch()
  const q = query.trim().toLowerCase()
  const hero = !user && !q ? <Hero /> : null

  if (loading) return <div className="empty">Yükleniyor…</div>
  if (error) return <div className="empty error">{error}</div>
  if (!feed || feed.days.length === 0)
    return <div className="empty">Henüz içerik yok — ilk günlük analiz geldiğinde burada görünecek.</div>

  const days = feed.days
    .map((day) => ({ ...day, projects: day.projects.filter((p) => projectMatches(p, q)) }))
    .filter((day) => day.projects.length > 0)

  if (days.length === 0) return <div className="empty">Sonuç yok — arama terimini değiştirmeyi dene.</div>

  return (
    <div className="feed">
      {hero}
      {days.map((day) => (
        <section key={day.date} className="day-group">
          <h2 className="day-head">{formatDate(day.date)}</h2>
          {day.projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </section>
      ))}
    </div>
  )
}
