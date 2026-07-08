import { Link } from 'react-router-dom'
import { useFeed } from '../context/FeedContext'
import { useSearch } from '../context/SearchContext'

export function GlossaryPage() {
  const { feed, loading, error } = useFeed()
  const { query } = useSearch()
  const q = query.trim().toLowerCase()

  if (loading) return <div className="empty">Yükleniyor…</div>
  if (error) return <div className="empty error">{error}</div>

  let terms = feed?.terms ?? []
  if (q) terms = terms.filter((t) => (t.term + ' ' + t.def).toLowerCase().includes(q))
  terms = [...terms].sort((a, b) => b.count - a.count || a.term.localeCompare(b.term, 'tr'))

  if (terms.length === 0)
    return <div className="empty">Terim bulunamadı — arama terimini değiştirmeyi dene.</div>

  return (
    <div className="glossary">
      <p className="page-note">
        Analizlerde geçen tüm jargon burada birikir. Günlük tekrar (Leitner) sistemi Faz 2'de geliyor.
      </p>
      {terms.map((t) => (
        <div key={t.key} className="gl-row">
          <div className="gl-term">
            {t.term}
            {t.count === 1 && <span className="tag-new">yeni</span>}
          </div>
          <div className="gl-def">{t.def}</div>
          <div className="gl-meta">
            {t.count} kez ·{' '}
            {t.projects.slice(0, 3).map((p, i) => (
              <span key={p.id}>
                {i > 0 && ', '}
                <Link to={`/proje/${encodeURIComponent(p.id)}`}>{p.name}</Link>
              </span>
            ))}
            {t.projects.length > 3 && ` +${t.projects.length - 3}`}
          </div>
        </div>
      ))}
    </div>
  )
}
