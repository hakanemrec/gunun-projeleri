import { Link } from 'react-router-dom'
import { useFeed } from '../context/FeedContext'
import { useSearch } from '../context/SearchContext'
import { useProgress } from '../context/ProgressContext'
import { useAuth } from '../context/AuthContext'
import { todayISO, MAX_BOX } from '../lib/leitner'

export function GlossaryPage() {
  const { feed, loading, error } = useFeed()
  const { query } = useSearch()
  const { progress } = useProgress()
  const { user } = useAuth()
  const q = query.trim().toLowerCase()
  const today = todayISO()

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
        Analizlerde geçen tüm jargon burada birikir. <Link to="/quiz">Günlük quiz</Link> ile çalıştıkça
        her terimin kutusu ilerler (kutu {MAX_BOX} = oturdu).
      </p>
      {terms.map((t) => (
        <div key={t.key} className="gl-row">
          <div className="gl-term">
            {t.term}
            {t.count === 1 && <span className="tag-new">yeni</span>}
            {user && (() => {
              const p = progress.get(t.key)
              if (!p) return null
              const due = p.next_review_at <= today
              return (
                <span className={`box-chip${p.box >= MAX_BOX ? ' done' : ''}${due ? ' due' : ''}`}>
                  {p.box >= MAX_BOX ? '✓ oturdu' : `kutu ${p.box}`}
                  {due && p.box < MAX_BOX && ' · vadesi geldi'}
                </span>
              )
            })()}
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
