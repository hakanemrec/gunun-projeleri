import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { AuthProvider } from './context/AuthContext'
import { FeedProvider } from './context/FeedContext'
import { UserDataProvider } from './context/UserDataContext'
import { ProgressProvider } from './context/ProgressContext'
import { SearchProvider } from './context/SearchContext'
import { Layout } from './components/Layout'
import { FeedPage } from './pages/FeedPage'
import { ProjectPage } from './pages/ProjectPage'
import { GlossaryPage } from './pages/GlossaryPage'
import { BookmarksPage } from './pages/BookmarksPage'
import { QuizPage } from './pages/QuizPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <UserDataProvider>
        <FeedProvider>
          <ProgressProvider>
          <SearchProvider>
            <BrowserRouter>
              <Routes>
                <Route element={<Layout />}>
                  <Route index element={<FeedPage />} />
                  <Route path="proje/:id" element={<ProjectPage />} />
                  <Route path="sozluk" element={<GlossaryPage />} />
                  <Route path="kaydedilenler" element={<BookmarksPage />} />
                  <Route path="quiz" element={<QuizPage />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SearchProvider>
          </ProgressProvider>
        </FeedProvider>
      </UserDataProvider>
    </AuthProvider>
  </StrictMode>
)
