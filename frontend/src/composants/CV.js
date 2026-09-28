import React, { useState } from 'react';

function CV() {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' | 'print'

  const handlePrint = () => {
    // Ouvre cv.html dans un nouvel onglet pour l'impression propre
    window.open('/cv.html', '_blank');
  };

  return (
    <div style={{ padding: '4rem 6%', maxWidth: '1200px', margin: '0 auto' }}>

      {/* En-tête */}
      <div style={{ marginBottom: '2.5rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)',
          color: 'var(--primary)', padding: '6px 18px', borderRadius: '100px',
          fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1.5px',
          textTransform: 'uppercase', marginBottom: '1.2rem',
        }}>
          📄 Curriculum Vitæ
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <h1 className="section-title">Mon <span>CV</span></h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem' }}>
              Administratrice Systèmes &amp; Réseaux · Cloud &amp; DevOps
            </p>
          </div>

          {/* Boutons d'action */}
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button
              onClick={handlePrint}
              className="btn btn-primary"
            >
              🖨️ Imprimer / PDF
            </button>
            <a
              href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-linkedin"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              Profil LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Onglets */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0' }}>
        {[
          { id: 'preview', label: '🌙 Version Dark (web)' },
          { id: 'print',   label: '☀️ Version Claire (impression)' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '10px 20px', border: 'none', cursor: 'pointer',
              background: 'none', fontFamily: 'inherit', fontWeight: '700', fontSize: '0.88rem',
              color: activeTab === tab.id ? 'var(--primary)' : 'var(--text-muted)',
              borderBottom: activeTab === tab.id ? '2px solid var(--primary)' : '2px solid transparent',
              transition: 'all 0.2s',
              marginBottom: '-1px',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Iframe du CV */}
      <div style={{
        borderRadius: 'var(--radius-xl)', overflow: 'hidden',
        border: '1px solid var(--border-main)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        background: 'white',
      }}>
        <iframe
          src={activeTab === 'preview' ? '/cv.html' : '/cv-print.html'}
          title="CV Anna Keita"
          style={{
            width: '100%',
            height: '1100px',
            border: 'none',
            display: 'block',
          }}
        />
      </div>

      {/* Note sous le CV */}
      <div style={{
        marginTop: '1.5rem', padding: '1.2rem 1.5rem',
        background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.15)',
        borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '10px',
      }}>
        <span>💡</span>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          Pour imprimer ou exporter en PDF, cliquez sur <strong style={{ color: 'white' }}>Imprimer / PDF</strong> — cela ouvre le CV en plein écran, puis utilisez <strong style={{ color: 'white' }}>Ctrl+P</strong> → <em>Enregistrer en PDF</em>.
        </p>
      </div>
    </div>
  );
}

export default CV;
