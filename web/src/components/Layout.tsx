import { NavLink, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useFeed } from '../context/FeedContext'
import { useUserData } from '../context/UserDataContext'
import { useProgress } from '../context/ProgressContext'
import { useSearch } from '../context/SearchContext'

function ThemeToggle() {
  const [theme, setTheme] = useState<string>(() => document.documentElement.dataset.theme ?? 'dark')
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('gp_theme', theme)
  }, [theme])
  return (
    <button
      className="icon-btn"
      title={theme === 'dark' ? 'Açık temaya geç' : 'Koyu temaya geç'}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

function AuthButton() {
  const { user, enabled, signIn, signOut } = useAuth()
  if (!enabled) return null
  if (!user) {
    return (
      <button className="btn btn-primary" onClick={signIn}>
        GitHub ile giriş
      </button>
    )
  }
  const avatar = user.user_metadata?.avatar_url as string | undefined
  const name = (user.user_metadata?.user_name as string | undefined) ?? user.email ?? ''
  return (
    <button className="user-chip" onClick={signOut} title={`${name} — çıkış yap`}>
      {avatar && <img src={avatar} alt="" />}
      <span>{name}</span>
    </button>
  )
}

export function Layout() {
  const { feed } = useFeed()
  const { bookmarks } = useUserData()
  const { dueCount } = useProgress()
  const { query, setQuery } = useSearch()

  return (
    <div className="shell">
      <header className="topbar">
        <div className="topbar-inner">
          <NavLink to="/" className="brand" title="daily — Günün Projeleri">
            <span className="brand-word">
              d<em>ai</em>ly
            </span>
          </NavLink>
          <input
            className="search"
            type="search"
            placeholder="Ara: proje, dil, terim…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <nav className="tabs">
            <NavLink to="/" end className="tab">
              Akış
            </NavLink>
            <NavLink to="/kaydedilenler" className="tab">
              Kaydedilenler{bookmarks.size > 0 && <span className="badge">{bookmarks.size}</span>}
            </NavLink>
            <NavLink to="/sozluk" className="tab">
              Sözlük{feed && <span className="badge">{feed.terms.length}</span>}
            </NavLink>
            <NavLink to="/quiz" className="tab">
              Quiz{dueCount > 0 && <span className="badge due">{dueCount}</span>}
            </NavLink>
            <NavLink to="/hafta" className="tab">
              Hafta
            </NavLink>
          </nav>
          <div className="topbar-actions">
            <ThemeToggle />
            <AuthButton />
          </div>
        </div>
      </header>
      <main className="content">
        <Outlet />
      </main>
      <footer className="foot">
        <NavLink to="/hakkinda">hakkında</NavLink>
        {feed?.source === 'dev' && (
          <span className="dev-note"> · yerel mod — Supabase yapılandırılmadı, veriler dev-feed.json'dan</span>
        )}
      </footer>
    </div>
  )
}
