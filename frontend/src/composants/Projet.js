import React from 'react';
import { Link } from 'react-router-dom';

/* Couleurs par catégorie */
const CATEGORIE_CONFIG = {
  ODC: { label: 'ODC', color: '#8b5cf6', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.3)' },
  ISI: { label: 'ISI', color: '#06b6d4', bg: 'rgba(6,182,212,0.12)', border: 'rgba(6,182,212,0.3)' },
  AUTRE: { label: 'AUTRE', color: '#f59e0b', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' },
};

/* Image de secours par catégorie */
const FALLBACK = {
  ODC: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=600&auto=format&fit=crop',
  ISI: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=600&auto=format&fit=crop',
  AUTRE: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
};

function Projet({ projet, onSupprimer, onAfficherDetail, isReadOnly }) {
  const cat = CATEGORIE_CONFIG[projet.categorie] || CATEGORIE_CONFIG.AUTRE;

  /* Tronquer les technologies si trop longues */
  const techs = projet.technologie
    ? projet.technologie.split(',').map(t => t.trim()).slice(0, 5)
    : [];
  const hasMore = projet.technologie
    ? projet.technologie.split(',').length > 5
    : false;

  const handleDetail = (e) => {
    if (onAfficherDetail) {
      e.preventDefault();
      onAfficherDetail(projet);
    }
  };

  return (
    <div className="carte-projet" style={{ cursor: 'pointer' }} onClick={handleDetail}>

      {/* ── Tags technologies en haut ── */}
      <div className="projet-tags-header" style={{
        padding: '1rem 1.5rem 0.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
      }}>
        {techs.map((tech, i) => (
          <span key={i} className="tech-tag" style={{
            background: 'rgba(139,92,246,0.12)',
            border: '1px solid rgba(139,92,246,0.3)',
            color: '#a78bfa',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '0.7rem',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}>
            {tech}
          </span>
        ))}
        {hasMore && (
          <span style={{
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'var(--text-muted)',
            padding: '4px 12px',
            borderRadius: '100px',
            fontSize: '0.7rem',
            fontWeight: '700',
          }}>
            +{projet.technologie.split(',').length - 5}
          </span>
        )}
      </div>

      {/* ── Titre du projet ── */}
      <div className="projet-title-section" style={{
        padding: '0.5rem 1.5rem 1rem',
      }}>
        <h3 style={{
          fontSize: '1.25rem',
          fontWeight: '800',
          color: 'var(--text-main)',
          lineHeight: '1.3',
          marginBottom: '0.5rem',
          fontFamily: 'Syne, sans-serif',
        }}>
          {projet.libelle}
        </h3>
        {projet.description && (
          <p style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: '1.6',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
            {projet.description.split('\n')[0]}
          </p>
        )}
      </div>

      {/* ── Image avec overlay ── */}
      <div className="projet-image-container" style={{ position: 'relative' }}>
        <img
          src={projet.image || FALLBACK[projet.categorie] || FALLBACK.AUTRE}
          alt={projet.libelle}
          className="projet-image"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = FALLBACK[projet.categorie] || FALLBACK.AUTRE;
          }}
        />
        {/* Overlay gradient */}
        <div className="projet-image-overlay" style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(6,6,18,0.8) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        {/* Badge catégorie sur l'image */}
        <span className="category-badge" style={{
          position: 'absolute',
          bottom: '16px',
          left: '16px',
          background: cat.bg,
          border: `1px solid ${cat.border}`,
          color: cat.color,
          padding: '6px 14px',
          borderRadius: '100px',
          fontSize: '0.72rem',
          fontWeight: '800',
          letterSpacing: '1px',
          textTransform: 'uppercase',
          backdropFilter: 'blur(10px)',
        }}>
          {cat.label}
        </span>
        {/* Badge statut */}
        <span className="status-badge" style={{
          position: 'absolute',
          bottom: '16px',
          right: '16px',
          background: projet.statut === 'Terminé'
            ? 'rgba(16,185,129,0.2)' : 'rgba(245,158,11,0.2)',
          border: projet.statut === 'Terminé'
            ? '1px solid rgba(16,185,129,0.5)' : '1px solid rgba(245,158,11,0.5)',
          color: projet.statut === 'Terminé' ? '#34d399' : '#fbbf24',
          padding: '6px 12px',
          borderRadius: '100px',
          fontSize: '0.7rem',
          fontWeight: '800',
          backdropFilter: 'blur(10px)',
        }}>
          {projet.statut === 'Terminé' ? '✓ Terminé' : '⚡ En cours'}
        </span>
      </div>

      {/* ── Pied de carte ── */}
      <div className="projet-footer" style={{
        padding: '1rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTop: '1px solid var(--border-subtle)',
        background: 'rgba(255,255,255,0.02)',
      }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontWeight: '600' }}>
          {projet.dateDebut ? projet.dateDebut.substring(0, 4) : '—'}
          {projet.dateFin ? ` → ${projet.dateFin.substring(0, 4)}` : ''}
        </span>
        <Link
          to={`/projet/${projet._id}`}
          className="btn-detail-link"
          onClick={handleDetail}
          style={{ fontSize: '0.85rem' }}
        >
          Voir le projet →
        </Link>
      </div>

      {/* Bouton Supprimer (admin only) */}
      {!isReadOnly && (
        <button
          style={{
            marginTop: '1rem', width: '100%',
            background: 'rgba(239,68,68,0.08)',
            border: '1px solid rgba(239,68,68,0.2)',
            color: '#ef4444', borderRadius: 'var(--radius-md)',
            padding: '10px', cursor: 'pointer',
            fontSize: '0.85rem', fontWeight: '700',
          }}
          onClick={(e) => { e.stopPropagation(); onSupprimer(projet._id); }}
        >
          🗑 Supprimer
        </button>
      )}
    </div>
  );
}

export default Projet;
