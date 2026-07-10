import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useFeed } from '../context/FeedContext'
import { useProgress } from '../context/ProgressContext'
import { buildDeck, MAX_BOX, type DeckCard } from '../lib/leitner'

interface SessionResult {
  correct: number
  wrong: number
}

function BoxDots({ box }: { box: number }) {
  return (
    <span className="box-dots" title={`Kutu ${box}/${MAX_BOX}`}>
      {Array.from({ length: MAX_BOX }, (_, i) => (
        <i key={i} className={i < box ? 'on' : ''} />
      ))}
    </span>
  )
}

function Session({
  deck,
  onFinish,
}: {
  deck: DeckCard[]
  onFinish: (result: SessionResult) => void
}) {
  const { answer } = useProgress()
  const [index, setIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [result, setResult] = useState<SessionResult>({ correct: 0, wrong: 0 })
  const [lastBox, setLastBox] = useState<number | null>(null)

  const card = deck[index]

  const respond = async (correct: boolean) => {
    const box = await answer(card.term.key, correct)
    setLastBox(box)
    const next = {
      correct: result.correct + (correct ? 1 : 0),
      wrong: result.wrong + (correct ? 0 : 1),
    }
    setResult(next)
    // kısa bir kutu geri bildirimi sonrası sıradaki kart
    setTimeout(() => {
      setLastBox(null)
      setFlipped(false)
      if (index + 1 >= deck.length) onFinish(next)
      else setIndex(index + 1)
    }, 650)
  }

  return (
    <div className="quiz-session">
      <div className="quiz-top">
        <span className="quiz-count">
          {index + 1} / {deck.length}
        </span>
        <div className="quiz-progress">
          <div className="quiz-progress-fill" style={{ width: `${(index / deck.length) * 100}%` }} />
        </div>
      </div>

      <div
        className={`quiz-card${flipped ? ' flipped' : ''}${lastBox != null ? ' answered' : ''}`}
        onClick={() => !flipped && setFlipped(true)}
      >
        <div className="quiz-card-inner">
          <div className="quiz-face front">
            {card.isNew && <span className="tag-new">yeni terim</span>}
            <div className="quiz-term">{card.term.term}</div>
            <div className="quiz-hint">tanımı görmek için dokun</div>
          </div>
          <div className="quiz-face back">
            <div className="quiz-term small">{card.term.term}</div>
            <div className="quiz-def">{card.term.def}</div>
            {lastBox != null && (
              <div className="quiz-feedback">
                <BoxDots box={lastBox} />
              </div>
            )}
          </div>
        </div>
      </div>

      {flipped && lastBox == null && (
        <div className="quiz-actions">
          <button className="btn quiz-btn wrong" onClick={() => respond(false)}>
            Bilemedim
          </button>
          <button className="btn quiz-btn right" onClick={() => respond(true)}>
            Bildim
          </button>
        </div>
      )}
    </div>
  )
}

export function QuizPage() {
  const { user, enabled, signIn } = useAuth()
  const { feed, loading: feedLoading } = useFeed()
  const { progress, streak, loading: progressLoading, completeSession } = useProgress()

  const [phase, setPhase] = useState<'idle' | 'active' | 'done'>('idle')
  const [result, setResult] = useState<SessionResult>({ correct: 0, wrong: 0 })
  const [deck, setDeck] = useState<DeckCard[]>([])

  const available = useMemo(
    () => (feed ? buildDeck(feed.terms, progress) : []),
    [feed, progress]
  )

  if (!enabled || !user) {
    return (
      <div className="empty">
        <p>Quiz ilerlemen bulutta saklanır — önce giriş yapman gerekiyor.</p>
        {enabled ? (
          <button className="btn btn-primary" onClick={signIn}>
            GitHub ile giriş
          </button>
        ) : (
          <p>Supabase yapılandırılmadan quiz kullanılamaz.</p>
        )}
      </div>
    )
  }

  if (feedLoading || progressLoading) return <div className="empty">Yükleniyor…</div>

  if (phase === 'active') {
    return (
      <Session
        deck={deck}
        onFinish={async (r) => {
          setResult(r)
          await completeSession()
          setPhase('done')
        }}
      />
    )
  }

  if (phase === 'done') {
    return (
      <div className="quiz-summary">
        <div className="big">{result.wrong === 0 ? '🏆' : '🎉'}</div>
        <h2>Seans tamamlandı!</h2>
        <div className="quiz-score">
          <span className="ok">{result.correct} bildin</span>
          {result.wrong > 0 && <span className="nope">{result.wrong} tekrar gelecek</span>}
        </div>
        {streak && (
          <p className="quiz-streak">
            🔥 {streak.current_streak} günlük seri
            {streak.best_streak > streak.current_streak && ` (rekor: ${streak.best_streak})`}
          </p>
        )}
        <Link to="/" className="btn">
          Akışa dön
        </Link>
      </div>
    )
  }

  // idle: seans daveti
  const newCount = available.filter((c) => c.isNew).length
  const dueInDeck = available.length - newCount

  if (available.length === 0) {
    return (
      <div className="quiz-summary">
        <div className="big">🌤️</div>
        <h2>Bugünlük bitti</h2>
        <p className="page-note">Tekrarı gelen kart yok. Yarın yeni terimlerle devam.</p>
        {streak && <p className="quiz-streak">🔥 {streak.current_streak} günlük seri</p>}
      </div>
    )
  }

  return (
    <div className="quiz-summary">
      <div className="big">🃏</div>
      <h2>Günün seansı hazır</h2>
      <p className="page-note">
        {dueInDeck > 0 && `${dueInDeck} tekrar`}
        {dueInDeck > 0 && newCount > 0 && ' + '}
        {newCount > 0 && `${newCount} yeni terim`}
        {' — '}~{Math.max(1, Math.round(available.length / 4))} dk
      </p>
      {streak && streak.current_streak > 0 && (
        <p className="quiz-streak">🔥 {streak.current_streak} günlük seri sürüyor</p>
      )}
      <button
        className="btn btn-primary"
        onClick={() => {
          setDeck(available)
          setPhase('active')
        }}
      >
        Başla ({available.length} kart)
      </button>
    </div>
  )
}
