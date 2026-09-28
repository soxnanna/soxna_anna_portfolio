import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [isLight, setIsLight] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'light';
  });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.remove('light-mode');
      localStorage.setItem('theme', 'dark');
    }
  }, [isLight]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ferme le menu mobile au changement de page
  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar" style={scrolled ? { boxShadow: '0 4px 30px rgba(0,0,0,0.4)' } : {}}>
      {/* Logo */}
      <div className="navbar-brand">
        <Link to="/" style={{ padding: 0, background: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo-ak.png" alt="Anna KEITA" className="navbar-logo" />
        </Link>
      </div>

      {/* Desktop Links */}
      <div className="navbar-links" style={{ display: 'flex' }}>
        <Link to="/"         className={`nav-link ${isActive('/')        ? 'active' : ''}`}>Accueil</Link>
        <Link to="/about"    className={`nav-link ${isActive('/about')   ? 'active' : ''}`}>Parcours</Link>
        <Link to="/portfolio" className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}>Projets</Link>
        <Link to="/cv"       className={`nav-link ${isActive('/cv')      ? 'active' : ''}`}>CV</Link>

        {/* LinkedIn — mis en avant */}
        <a
          href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-linkedin-btn"
          title="Voir mon profil LinkedIn"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          LinkedIn
        </a>

        <Link to="/contact" className="nav-link nav-contact-btn">Contact</Link>

        <button
          className="theme-toggle"
          onClick={() => setIsLight(!isLight)}
          title="Changer le thème"
          aria-label="Basculer le thème"
        >
          {isLight ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="theme-toggle"
        style={{ display: 'none' }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Menu"
      >
        {menuOpen ? '✕' : '☰'}
      </button>
    </nav>
  );
}

export default Navbar;
