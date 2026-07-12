import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export function AboutPage() {
  const { user, enabled, signIn } = useAuth()

  return (
    <div className="about">
      <h1 className="about-title">
        d<em>ai</em>ly nedir?
      </h1>
      <p className="about-lead">
        Her gün 5 dakika: GitHub'da trend olan projeleri Türkçe derinlemesine oku, jargonunu
        öğren, quiz'le kalıcılaştır.
      </p>

      <div className="about-steps">
        <div className="about-step">
          <div className="step-icon">📰</div>
          <h3>Oku</h3>
          <p>
            Yapay zekâ her sabah GitHub Trending'i tarar; AI, geliştirici araçları, veritabanı ve
            üretkenlik alanından en dikkat çekici projeleri seçip Türkçe analiz eder: neye hizmet
            ediyor, hangi teknolojilerle, neden ilgi görüyor, nereye evrilebilir.
          </p>
        </div>
        <div className="about-step">
          <div className="step-icon">📖</div>
          <h3>Öğren</h3>
          <p>
            Analizlerde geçen her teknik jargon, sade Türkçe tanımıyla sözlüğe eklenir. Sözlük her
            gün büyür; hangi terim kaç projede geçti, hangileri yeni — hepsi takip edilir.
          </p>
        </div>
        <div className="about-step">
          <div className="step-icon">🃏</div>
          <h3>Kalıcılaştır</h3>
          <p>
            Günlük quiz, bilimsel aralıklı tekrar (Leitner) yöntemiyle terimleri sorar: bildikçe
            aralık açılır, bilemeyince sıklaşır. Günde 5 yeni terim, 5 dakikalık seans, 🔥 seri
            takibi.
          </p>
        </div>
      </div>

      <div className="about-cta">
        {!user && enabled ? (
          <>
            <p>Sözlüğün ve quiz ilerlemen sana özel — başlamak için giriş yap:</p>
            <button className="btn btn-primary" onClick={signIn}>
              GitHub ile giriş
            </button>
          </>
        ) : (
          <Link to="/" className="btn btn-primary">
            Akışa git
          </Link>
        )}
      </div>

      <p className="about-foot">
        dAIly açık kaynak ruhuyla, tamamen otomatik bir pipeline üzerinde çalışır. Okumak ve bülten
        her zaman ücretsizdir. Geri bildirim için:{' '}
        <a href="https://github.com/hakanemrec/gunun-projeleri/issues" target="_blank" rel="noopener noreferrer">
          GitHub Issues
        </a>
      </p>
    </div>
  )
}
