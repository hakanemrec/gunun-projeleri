import { Link } from 'react-router-dom'
import type { Project } from '../lib/types'
import { mdToText } from './Markdown'
import { useUserData } from '../context/UserDataContext'

export function ProjectCard({ project }: { project: Project }) {
  const { bookmarks, notes, toggleBookmark } = useUserData()
  const bookmarked = bookmarks.has(project.id)
  const hasNote = project.id in notes
  const summary = project.sections.serves ? mdToText(project.sections.serves) : ''

  return (
    <article className="card">
      <div className="card-head">
        <Link to={`/proje/${encodeURIComponent(project.id)}`} className="card-title">
          {project.name}
        </Link>
        <button
          className={`star-btn${bookmarked ? ' on' : ''}`}
          title={bookmarked ? 'Kaydedilenlerden çıkar' : 'Kaydet'}
          onClick={() => toggleBookmark(project.id)}
        >
          {bookmarked ? '★' : '☆'}
        </button>
      </div>
      <div className="card-meta">
        {project.language && (
          <span className="meta-item">
            <span className="lang-dot" />
            {project.language}
          </span>
        )}
        {project.stars && <span className="meta-item stars">★ {project.stars}</span>}
        {project.glossary.length > 0 && (
          <span className="meta-item">📖 {project.glossary.length} terim</span>
        )}
        {hasNote && <span className="meta-item">📝 notun var</span>}
      </div>
      {summary && <p className="card-summary">{summary}</p>}
      <Link to={`/proje/${encodeURIComponent(project.id)}`} className="card-more">
        Analizi oku →
      </Link>
    </article>
  )
}
