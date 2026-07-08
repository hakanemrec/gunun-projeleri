import { useFeed } from '../context/FeedContext'
import { useUserData } from '../context/UserDataContext'
import { useSearch } from '../context/SearchContext'
import { ProjectCard } from '../components/ProjectCard'
import { projectMatches } from './FeedPage'

export function BookmarksPage() {
  const { feed, loading, error } = useFeed()
  const { bookmarks } = useUserData()
  const { query } = useSearch()
  const q = query.trim().toLowerCase()

  if (loading) return <div className="empty">Yükleniyor…</div>
  if (error) return <div className="empty error">{error}</div>

  const items = (feed?.days ?? [])
    .flatMap((d) => d.projects)
    .filter((p) => bookmarks.has(p.id) && projectMatches(p, q))

  if (items.length === 0)
    return (
      <div className="empty">
        Henüz kaydedilen yok — kartlardaki ☆ ile projeleri buraya biriktir.
      </div>
    )

  return (
    <div className="feed">
      <div className="day-group">
        {items.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  )
}
