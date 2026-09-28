import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Projet from './Projet';
import StatsPanel from './StatsPanel';

const API_URL       = process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/projets` : 'http://localhost:5000/projets';
const CERTS_API_URL = process.env.REACT_APP_API_URL ? `${process.env.REACT_APP_API_URL}/certifications` : 'http://localhost:5000/certifications';

/* ── Icône LinkedIn SVG inline ── */
const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

/* ── Icône GitHub SVG inline ── */
const GitHubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

function Home() {
  const navigate = useNavigate();
  const [featuredProjects, setFeaturedProjects] = useState([]);
  const [certifications, setCertifications]     = useState([]);
  const [showWelcome, setShowWelcome]           = useState(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    if (!hasVisited) {
      setTimeout(() => setShowWelcome(true), 1200);
      sessionStorage.setItem('hasVisited', 'true');
    }

    const fetchProjects = async () => {
      try {
        const res = await axios.get(API_URL);
        setFeaturedProjects(res.data.slice(0, 3));
      } catch (e) { console.error(e); }
    };
    const fetchCertifications = async () => {
      try {
        const res = await axios.get(CERTS_API_URL);
        setCertifications(res.data);
      } catch (e) { console.error(e); }
    };

    fetchProjects();
    fetchCertifications();
  }, []);

  return (
    <div className="home-page">

      {/* ── WELCOME MODAL ── */}
      {showWelcome && (
        <div className="modal-overlay" onClick={() => setShowWelcome(false)}>
          <div className="welcome-modal" onClick={e => e.stopPropagation()}>
            <button className="welcome-close" onClick={() => setShowWelcome(false)}>✕</button>
            <img
              src="/profile.jpg"
              alt="Anna Keita"
              className="modal-img"
              onError={e => e.target.src = 'https://ui-avatars.com/api/?name=Anna+Keita&background=8b5cf6&color=fff'}
            />
            <h2 className="section-title" style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
              Bonjour ! 👋
            </h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '0.6rem', fontSize: '1rem' }}>
              Bonjour ! Je suis <strong style={{ color: 'white' }}>Anna KEITA</strong>,<br />
              Administratrice Systèmes &amp; Réseaux, spécialisée Cloud &amp; DevOps.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.88rem' }}>
              Certifiée AWS · CCNA · Linux — prête à relever de nouveaux défis. 💪
            </p>
            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => setShowWelcome(false)}>
                Découvrir mon travail
              </button>
              <a
                href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
                onClick={() => setShowWelcome(false)}
              >
                <LinkedInIcon size={17} /> Mon LinkedIn
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
          HERO — layout deux colonnes
      ══════════════════════════════════════ */}
      <section className="hero">
        {/* Gauche */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            Disponible · Dakar, Sénégal
          </div>

          <h1 className="hero-title">
            Anna<br />
            <span className="name-highlight">KEITA</span>
          </h1>

          <p className="hero-role">
            Administratrice Systèmes &amp; Réseaux · Cloud &amp; DevOps
          </p>

          <p className="hero-description">
            Étudiante en fin de Licence ISI Dakar, formée au Cloud &amp; DevOps à l'Orange Digital Center.
            Certifiée AWS, Cisco CCNA &amp; Linux. Passionnée d'infrastructure, d'automatisation et de sécurité.
          </p>

          <div className="hero-cta">
            <Link to="/portfolio" className="btn btn-primary">
              Voir mes projets →
            </Link>
            <a
              href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              <LinkedInIcon size={17} /> Mon LinkedIn
            </a>
            <Link to="/cv" className="btn btn-outline">
              📄 Consulter mon CV
            </Link>
          </div>

          <div className="hero-socials">
            <a
              href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill linkedin"
              aria-label="LinkedIn"
            >
              <LinkedInIcon size={15} />
              linkedin.com/in/anna-keita-1a83052aa
            </a>
            <a
              href="https://github.com/soxnanna"
              target="_blank"
              rel="noopener noreferrer"
              className="social-pill github"
              aria-label="GitHub"
            >
              <GitHubIcon size={15} />
              soxnanna
            </a>
          </div>
        </div>

        {/* Droite — carte profil */}
        <div className="hero-right">
          <div className="profile-card">
            {/* Badge flottants */}
            <div className="float-badge top-right">
              <span className="float-badge-icon">☁️</span>
              AWS Certified
            </div>
            <div className="float-badge bot-left">
              <span className="float-badge-icon">🏅</span>
              CCNA 1·2·3
            </div>

            <div className="profile-card-inner">
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div className="stat-badge">8+ Projets</div>
                <img
                  src="/profile.jpg"
                  alt="Anna KEITA"
                  className="profile-img"
                  onError={e => e.target.src = 'https://ui-avatars.com/api/?name=Anna+Keita&background=8b5cf6&color=fff&size=200'}
                />
              </div>

              <div className="profile-card-name">Anna KEITA</div>
              <div className="profile-card-role">Cloud · DevOps · Systèmes &amp; Réseaux</div>

              <div className="profile-card-badges">
                <span className="profile-badge">☁️ AWS</span>
                <span className="profile-badge">🐧 Linux</span>
                <span className="profile-badge">🐳 Docker</span>
                <span className="profile-badge">♾️ CI/CD</span>
              </div>

              <div className="profile-stats-row">
                <div className="profile-stat">
                  <div className="profile-stat-num">8+</div>
                  <div className="profile-stat-label">Projets</div>
                </div>
                <div className="profile-stat">
                  <div className="profile-stat-num">3</div>
                  <div className="profile-stat-label">Certifs</div>
                </div>
                <div className="profile-stat">
                  <div className="profile-stat-num">2</div>
                  <div className="profile-stat-label">Formations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LINKEDIN CTA — insertion pro
      ══════════════════════════════════════ */}
      <section className="linkedin-cta-section">
        <div className="linkedin-cta-inner">
          <div className="linkedin-logo-big">
            <LinkedInIcon size={72} style={{ color: '#0077B5' }} />
          </div>
          <div className="linkedin-cta-content">
            <h2>
              Mon profil <span>LinkedIn</span>
            </h2>
            <p>
              Retrouvez mon parcours complet, mes certifications, mes recommandations et toutes mes expériences
              sur LinkedIn. Le lien direct pour me contacter pour une opportunité professionnelle à Dakar ou à distance.
            </p>
            <div className="linkedin-url-chip">
              🔗 linkedin.com/in/anna-keita-1a83052aa
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-linkedin"
              >
                <LinkedInIcon size={17} /> Voir mon profil LinkedIn
              </a>
              <Link to="/contact" className="btn btn-outline">
                Envoyer un message
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPÉTENCES CLÉS
      ══════════════════════════════════════ */}
      <section style={{ padding: '6rem 6%', borderTop: '1px solid var(--border-main)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 className="section-title">Mes <span>Compétences</span></h2>
            <p className="section-subtitle">Technologies maîtrisées au fil de mes formations.</p>
          </div>
          <div className="skills-grid" style={{ maxWidth: '100%' }}>
            {[
              { icon: '☁️', name: 'AWS Cloud' },
              { icon: '🐧', name: 'Linux / Admin' },
              { icon: '🐳', name: 'Docker / K8s' },
              { icon: '♾️', name: 'CI/CD Jenkins' },
              { icon: '🔧', name: 'Terraform IaC' },
              { icon: '🛡️', name: 'DevSecOps' },
              { icon: '📡', name: 'Réseaux Cisco' },
              { icon: '📊', name: 'Prometheus/Grafana' },
              { icon: '⚛️', name: 'React / Node.js' },
              { icon: '🗄️', name: 'MongoDB / SQL' },
            ].map(s => (
              <div className="skill-card" key={s.name}>
                <span className="skill-icon">{s.icon}</span>
                <span className="skill-name">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CERTIFICATIONS
      ══════════════════════════════════════ */}
      <section className="certifications-section" style={{ borderTop: '1px solid var(--border-main)' }}>
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 className="section-title">Certifications <span>Officielles</span></h2>
          <p className="section-subtitle">Validation de mes compétences par les leaders du marché.</p>
        </div>

        <StatsPanel items={certifications} labelType="certifications" />

        <div className="certifs-grid" style={{ marginTop: '3rem', maxWidth: '1400px', margin: '3rem auto 0' }}>
          {certifications.map(cert => {
            const isAws = cert.libelle.toLowerCase().includes('aws');
            return (
              <div key={cert._id} className={`certif-card ${isAws ? 'featured' : ''}`}>
                <div className="certif-icon-wrap">
                  <span style={{ fontSize: '2rem' }}>{cert.image || '📜'}</span>
                </div>
                <h3 className="certif-title">{cert.libelle}</h3>
                <p className="certif-org">{cert.organisation}</p>
                <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  {cert.statut === 'En cours' ? (
                    <span style={{
                      background: 'rgba(245,158,11,0.1)', color: '#fbbf24',
                      padding: '4px 12px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: '800'
                    }}>⚡ EN COURS</span>
                  ) : (
                    <span style={{
                      background: 'rgba(16,185,129,0.1)', color: '#34d399',
                      padding: '4px 12px', borderRadius: '100px', fontSize: '0.68rem', fontWeight: '800'
                    }}>✓ OBTENUE {cert.dateObtention ? `(${cert.dateObtention})` : ''}</span>
                  )}
                  {isAws && (
                    <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '0.68rem', letterSpacing: '1px' }}>
                      CORE EXPERTISE
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROJETS PHARES
      ══════════════════════════════════════ */}
      <section style={{ padding: '6rem 6%', borderTop: '1px solid var(--border-main)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 className="section-title">Projets <span>Phares</span></h2>
              <p className="section-subtitle">Une sélection de mes travaux récents.</p>
            </div>
            <Link to="/portfolio" className="btn btn-outline" style={{ fontSize: '0.88rem' }}>
              Tout voir →
            </Link>
          </div>
          <div className="projects-grid" style={{ padding: '0' }}>
            {featuredProjects.map(projet => (
              <Projet
                key={projet._id}
                projet={projet}
                onAfficherDetail={p => navigate(`/projet/${p._id}`)}
                isReadOnly={true}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
