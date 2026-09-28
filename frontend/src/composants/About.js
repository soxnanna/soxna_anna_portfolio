import React from 'react';

const steps = [
  {
    icon: '🎓',
    title: 'Baccalauréat, Série L1 (Langues et Civilisations Modernes)',
    period: 'Juillet 2023',
    description: 'Mon point de départ. Un bac littéraire m\'a appris à analyser, à structurer mes idées et à communiquer clairement, ce que j\'applique aujourd\'hui pour comprendre un problème technique et l\'expliquer.',
    tags: ['Analyse', 'Communication', 'Structure'],
    color: 'var(--accent)',
  },
  {
    icon: '🖥️',
    title: 'Licence Administration Systèmes & Réseaux (ISI)',
    period: 'Nov. 2023 – Août 2026',
    description: 'Ma formation de base en informatique : réseaux Cisco (VLAN, routage inter-VLAN), Active Directory et OpenLDAP, serveurs Windows et Linux, Exchange Server. Mon mémoire porte sur l\'intégration de l\'IA pour la gestion d\'un réseau (AIOps).',
    tags: ['Cisco', 'Linux', 'Windows Server', 'Active Directory', 'LDAP', 'VLAN', 'Exchange'],
    color: '#10b981',
  },
  {
    icon: '☁️',
    title: 'Parcours Cloud & DevOps (Orange Digital Center)',
    period: 'Fév. – Juil. 2026',
    description: 'Formation à l\'Orange Digital Center, avec le programme AWS re/Start. J\'y ai déployé des infrastructures sur AWS avec Terraform, conteneurisé des applications avec Docker, orchestré avec Kubernetes (EKS) et monté des pipelines CI/CD avec Jenkins et SonarQube.',
    tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'SonarQube'],
    color: 'var(--primary)',
  },
  {
    icon: '⚛️',
    title: 'Informatique & Développement d\'Applications (UNCHK)',
    period: 'En cours',
    description: 'Je me forme au développement d\'applications full stack pour relier l\'infrastructure et le code. J\'ai déjà réalisé une application MERN avec une API REST sécurisée.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'API REST', 'JWT'],
    color: '#f43f5e',
  },
];

function About() {
  return (
    <div className="about-page">
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.3)',
          color: 'var(--primary)', padding: '6px 18px', borderRadius: '100px',
          fontSize: '0.75rem', fontWeight: '700', letterSpacing: '1.5px',
          textTransform: 'uppercase', marginBottom: '1.5rem',
        }}>
          📚 Mon Parcours
        </div>
        <h1 className="section-title">Des langues aux <span>infrastructures cloud</span></h1>
        <p className="section-subtitle" style={{ maxWidth: '550px', margin: '0 auto' }}>
          Comment je suis arrivée à l\'administration systèmes, au réseau et au DevOps.
        </p>
      </div>

      {/* Timeline */}
      <div className="timeline-container">
        <div className="timeline-line"></div>

        {steps.map((step, i) => (
          <div className={`timeline-item fade-in-up stagger-${i + 1}`} key={i}>
            <div className="timeline-content">
              {/* Période */}
              <div className="timeline-period" style={{
                fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase',
                letterSpacing: '1.5px', color: step.color, marginBottom: '0.8rem',
              }}>
                {step.period}
              </div>
              {/* Icône + Titre */}
              <div className="timeline-header">
                <div className="timeline-icon" style={{
                  width: '48px', height: '48px', background: `${step.color}20`,
                  borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.5rem', flexShrink: 0, border: `1px solid ${step.color}40`,
                }}>{step.icon}</div>
                <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: '800', color: 'white' }}>{step.title}</h3>
              </div>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem' }}>{step.description}</p>
              {step.tags.length > 0 && (
                <div className="timeline-tags">
                  {step.tags.map(tag => (
                    <span className="tag" key={tag} style={{
                      background: `${step.color}15`,
                      border: `1px solid ${step.color}40`,
                      color: step.color,
                    }}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
            <div className="timeline-dot" style={{ background: step.color, boxShadow: `0 0 20px ${step.color}66` }}></div>
          </div>
        ))}
      </div>

      {/* CTA professionnel */}
      <div style={{
        maxWidth: '700px', margin: '5rem auto 0', textAlign: 'center',
        background: 'var(--bg-card)', border: '1px solid var(--border-main)',
        borderRadius: 'var(--radius-xl)', padding: '3rem',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
        <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '0.8rem', color: 'white' }}>
          Prête pour la prochaine étape
        </h3>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.7' }}>
          Je cherche une première expérience professionnelle où mettre en pratique mes compétences
          en infrastructure cloud, automatisation et DevSecOps.
        </p>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://www.linkedin.com/in/anna-keita-1a83052aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-linkedin"
          >
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            Mon profil LinkedIn
          </a>
          <a href="/cv" className="btn btn-outline">📄 Voir mon CV</a>
        </div>
      </div>
    </div>
  );
}

export default About;
