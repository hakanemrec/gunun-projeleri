import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { useFeed } from '../context/FeedContext'
import { useUserData } from '../context/UserDataContext'
import { Markdown } from '../components/Markdown'
import { formatDate } from '../lib/data'
import { SECTION_LABELS, SECTION_ORDER } from '../lib/types'

export function ProjectPage() {
  const { id } = useParams()
  const { projectById, loading } = useFeed()
  const { bookmarks, notes, toggleBookmark, saveNote } = useUserData()
  const project = id ? projectById.get(decodeURIComponent(id)) : undefined

  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState('')

  if (loading) return <div className="empty">Yükleniyor…</div>
  if (!project)
    return (
      <div className="empty">
        Proje bulunamadı. <Link to="/">Akışa dön</Link>
      </div>
    )

  const bookmarked = bookmarks.has(project.id)
  const note = notes[project.id]

  const startEdit = () => {
    setDraft(note ?? '')
    setEditing(true)
  }
  const commit = () => {
    saveNote(project.id, draft)
    setEditing(false)
  }

  return (
    <article className="detail">
      <Link to="/" className="back-link">
        ← Akış
      </Link>
      <header className="detail-head">
        <h1>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            {project.name} <span className="ext">↗</span>
          </a>
        </h1>
        <button
          className={`star-btn big${bookmarked ? ' on' : ''}`}
          title={bookmarked ? 'Kaydedilenlerden çıkar' : 'Kaydet'}
          onClick={() => toggleBookmark(project.id)}
        >
          {bookmarked ? '★' : '☆'}
        </button>
      </header>
      <div className="card-meta">
        {project.language && (
          <span className="meta-item">
            <span className="lang-dot" />
            {project.language}
          </span>
        )}
        {project.stars && <span className="meta-item stars">★ {project.stars}</span>}
        <span className="meta-item">{formatDate(project.dayDate)}</span>
      </div>

      {SECTION_ORDER.map((key) => {
        const body = project.sections[key]
        if (!body) return null
        return (
          <section key={key} className="detail-section">
            <h3>{SECTION_LABELS[key]}</h3>
            <div className="md">
              <Markdown>{body}</Markdown>
            </div>
          </section>
        )
      })}

      <section className="detail-section">
        <h3>📝 Notun</h3>
        {editing ? (
          <div className="note-editor">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="Bu proje hakkında notun… (neden ilginç, ne denerim, nereye yarar?)"
              rows={5}
              autoFocus
              onKeyDown={(e) => {
                if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') commit()
                if (e.key === 'Escape') setEditing(false)
              }}
            />
            <div className="note-actions">
              <button className="btn btn-primary" onClick={commit}>
                Kaydet
              </button>
              <button className="btn" onClick={() => setEditing(false)}>
                İptal
              </button>
            </div>
          </div>
        ) : note ? (
          <div className="note-view" onClick={startEdit} title="Düzenlemek için tıkla">
            {note}
          </div>
        ) : (
          <button className="btn" onClick={startEdit}>
            Not ekle
          </button>
        )}
      </section>

      {project.glossary.length > 0 && (
        <section className="detail-section">
          <h3>📖 Terim Sözlüğü</h3>
          <div className="term-list">
            {project.glossary.map((g) => (
              <div key={g.key} className="term-row">
                <b>{g.term}</b>
                <span className="term-def">{g.def}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </article>
  )
}
