import React from 'react';
import { Link } from 'react-router-dom';

const LinkedInIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const GitHubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div style={{
        maxWidth: '1400px', margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr', gap: '3rem',
        marginBottom: '2.5rem', flexWrap: 'wrap',
      }}>

        {/* Brand */}
        <div>
          <img src="/logo-ak.png" alt="Anna KEITA" className="footer-logo" />
          <p style={{ color: 'var(--text-muted)', maxWidth: '280px', lineHeight: '1.7', marginBottom: '1.5rem', fontSize: '0.92rem' }}>
            Administratrice Systèmes &amp; Réseaux, Cloud &amp; DevOps.<br />
            Certifiée AWS · CCNA · Linux Essentials.
          </p>

          {/* Réseaux sociaux mis en avant */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a
              href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'rgba(0,119,181,0.12)', border: '1px solid rgba(0,119,181,0.3)',
                color: '#38bdf8', padding: '8px 16px', borderRadius: '100px',
                textDecoration: 'none', fontSize: '0.82rem', fontWeight: '700',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,119,181,0.25)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(0,119,181,0.12)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <LinkedInIcon size={16} /> LinkedIn
            </a>
            <a
              href="https://github.com/soxnanna"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '7px',
                background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)',
                color: 'var(--text-muted)', padding: '8px 16px', borderRadius: '100px',
                textDecoration: 'none', fontSize: '0.82rem', fontWeight: '700',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              <GitHubIcon size={16} /> GitHub
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '1.2rem', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Navigation
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            {[
              { to: '/',          label: 'Accueil' },
              { to: '/about',     label: 'Parcours' },
              { to: '/portfolio', label: 'Projets' },
              { to: '/cv',        label: 'CV' },
              { to: '/contact',   label: 'Contact' },
            ].map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.92rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact rapide */}
        <div>
          <h4 style={{ color: 'var(--text-main)', marginBottom: '1.2rem', fontWeight: '700', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Contact rapide
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
            <a href="mailto:soxnanna@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.88rem' }}>
              📧 soxnanna@gmail.com
            </a>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>📞 +221 77 682 20 42</span>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>📍 Dakar, Sénégal 🇸🇳</span>
          </div>

          {/* Certifications */}
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
            {['☁️ AWS Cloud Practitioner', '🌐 Cisco CCNA 1·2·3', '🐧 Linux Essentials'].map(c => (
              <span key={c} style={{
                display: 'inline-flex', alignItems: 'center', gap: '6px',
                background: 'rgba(139,92,246,0.07)', border: '1px solid rgba(139,92,246,0.15)',
                color: 'var(--primary)', padding: '4px 10px', borderRadius: '100px',
                fontSize: '0.72rem', fontWeight: '700',
              }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: '1px solid var(--border-main)', paddingTop: '1.5rem',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        flexWrap: 'wrap', gap: '1rem', maxWidth: '1400px', margin: '0 auto',
      }}>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
          © {year} <strong style={{ color: 'var(--text-main)' }}>Anna KEITA</strong> — Portfolio Fullstack MERN
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>
          Conçu &amp; développé avec ❤️ à Dakar
        </p>
      </div>
    </footer>
  );
}

export default Footer;
