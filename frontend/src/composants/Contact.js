import React, { useState } from 'react';
import axios from 'axios';

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

function Contact() {
  const [form, setForm]     = useState({ nom: '', email: '', objet: '', message: '' });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';
      await axios.post(`${apiUrl}/messages`, form);
      setStatus('SUCCESS');
      setForm({ nom: '', email: '', objet: '', message: '' });
    } catch (err) {
      setStatus('ERROR');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto 3rem', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)',
          color: 'var(--primary)', padding: '6px 18px', borderRadius: '100px',
          fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1.5px',
          textTransform: 'uppercase', marginBottom: '1.2rem',
        }}>
          💬 Prenons contact
        </div>
        <h1 className="section-title">Parlons de vos <span>projets</span></h1>
        <p className="section-subtitle">
          Une opportunité Cloud, DevOps ou Admin Systèmes ? Je suis à l'écoute.
        </p>
      </div>

      <div className="contact-container">
        {/* ── Infos ── */}
        <div className="contact-info">

          {/* LinkedIn — carte mise en avant */}
          <a
            href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="detail-item linkedin-detail"
            style={{ marginBottom: '0.5rem' }}
          >
            <span className="detail-icon"><LinkedInIcon size={24} style={{ color: '#0077B5' }} /></span>
            <div>
              <p className="detail-label">LinkedIn — Profil Professionnel</p>
              <p className="detail-value" style={{ color: '#38bdf8', wordBreak: 'break-all' }}>
                linkedin.com/in/anna-keita-1a83052aa
              </p>
            </div>
            <span style={{ marginLeft: 'auto', color: '#0077B5', fontSize: '1.2rem' }}>↗</span>
          </a>

          <div style={{
            background: 'rgba(0,119,181,0.06)', border: '1px solid rgba(0,119,181,0.2)',
            borderRadius: 'var(--radius-md)', padding: '1rem 1.5rem',
            marginBottom: '1rem',
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: '1.6' }}>
              💡 <strong style={{ color: 'white' }}>Pour toute opportunité professionnelle</strong>, le plus rapide
              est de me contacter directement sur LinkedIn — je réponds sous 24h.
            </p>
          </div>

          <p className="contact-desc" style={{ fontSize: '1rem' }}>
            Vous avez une opportunité en Cloud AWS, DevOps ou Administration Systèmes ?
            Je suis disponible pour un stage ou un premier poste à Dakar.
          </p>

          <div className="contact-details">
            <div className="detail-item">
              <span className="detail-icon">📧</span>
              <div>
                <p className="detail-label">Email</p>
                <p className="detail-value">soxnanna@gmail.com</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📞</span>
              <div>
                <p className="detail-label">Téléphone</p>
                <p className="detail-value">+221 77 682 20 42</p>
              </div>
            </div>
            <div className="detail-item">
              <span className="detail-icon">📍</span>
              <div>
                <p className="detail-label">Localisation</p>
                <p className="detail-value">Dakar, Sénégal 🇸🇳</p>
              </div>
            </div>
            <a
              href="https://github.com/soxnanna"
              target="_blank"
              rel="noopener noreferrer"
              className="detail-item"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <span className="detail-icon">💻</span>
              <div>
                <p className="detail-label">GitHub</p>
                <p className="detail-value">github.com/soxnanna</p>
              </div>
            </a>
          </div>
        </div>

        {/* ── Formulaire ── */}
        <div className="contact-form-container">
          <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '1.8rem', color: 'white' }}>
            Envoyer un message
          </h3>

          {status === 'SUCCESS' && (
            <div style={{
              background: 'rgba(16,185,129,0.1)', color: '#34d399',
              padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem', border: '1px solid rgba(16,185,129,0.3)',
              textAlign: 'center', fontWeight: '700', fontSize: '0.95rem',
            }}>
              ✅ Message envoyé ! Je vous répondrai rapidement.
            </div>
          )}
          {status === 'ERROR' && (
            <div style={{
              background: 'rgba(239,68,68,0.1)', color: '#ef4444',
              padding: '1rem 1.2rem', borderRadius: 'var(--radius-md)',
              marginBottom: '1.5rem', border: '1px solid rgba(239,68,68,0.3)',
              textAlign: 'center', fontWeight: '700', fontSize: '0.95rem',
            }}>
              ❌ Une erreur est survenue. Essayez via LinkedIn.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.2rem' }}>
              <div className="form-group">
                <label>Nom complet</label>
                <input
                  className="champ-saisie"
                  type="text"
                  placeholder="Votre nom"
                  required
                  value={form.nom}
                  onChange={e => setForm({ ...form, nom: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Adresse Email</label>
                <input
                  className="champ-saisie"
                  type="email"
                  placeholder="votre@email.com"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
            </div>
            <div className="form-group">
              <label>Objet</label>
              <input
                className="champ-saisie"
                type="text"
                placeholder="Ex: Opportunité de stage Cloud"
                required
                value={form.objet}
                onChange={e => setForm({ ...form, objet: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                className="champ-saisie"
                placeholder="Décrivez votre projet ou votre opportunité..."
                rows="5"
                required
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: '100%' }}
              disabled={loading}
            >
              {loading ? '⏳ Envoi en cours...' : 'Envoyer le message 📨'}
            </button>
          </form>

          <div style={{
            marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)',
            textAlign: 'center',
          }}>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
              Ou contactez-moi directement sur
            </p>
            <a
              href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <LinkedInIcon size={17} /> Écrire sur LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
