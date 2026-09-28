/* ==============================================
   seed.js — Peuplement de la base de données
   ============================================== */

const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
const mongoose = require('mongoose');
const Projet        = require('./models/projetModel');
const Certification = require('./models/certificationModel');
const User          = require('./models/userModel');

const projetsDemo = [

  // ════════════════════════════════════════════
  // ODC — Orange Digital Center  (5 projets)
  // ════════════════════════════════════════════

  {
    libelle     : 'Architecture Fullstack & Supervision Cloud Native',
    image       : 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    description : 'Déploiement d\'une application Full Stack complète sur Debian avec supervision intégrée.\n\n• Stack applicative : React (Frontend), Node.js/Express (Backend), MongoDB — conteneurisée avec Docker Compose. Reverse proxy Nginx pour le routage et la terminaison SSL.\n\n• Supervision Prometheus/Grafana : Node Exporter, cAdvisor, Alertmanager. Dashboards temps réel (CPU, RAM, réseau, I/O). Règles d\'alerte (CPU > 80%, mémoire > 85%).\n\n• Sécurité Linux : Durcissement Debian — désactivation services inutiles, iptables, fail2ban, audit permissions selon CIS Benchmark.',
    technologie : 'Docker Compose, Nginx, Prometheus, Grafana, Alertmanager, Debian, Node Exporter, cAdvisor',
    dateDebut   : '2026-02-01',
    dateFin     : '2026-07-01',
    categorie   : 'ODC',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Orchestration de Conteneurs : Docker & Kubernetes (EKS)',
    image       : 'https://images.unsplash.com/photo-1605745341112-85968b193ef5?q=80&w=400&auto=format&fit=crop',
    description : 'Modernisation applicative via la conteneurisation et l\'orchestration Cloud Native.\n\n• Images Docker optimisées : Builds multi-étapes pour Frontend (React) et Backend (Node.js). Réduction de la taille des images de 60%, minimisation de la surface d\'attaque.\n\n• Docker Compose : Orchestration locale avec réseaux isolés, volumes persistants et variables d\'environnement sécurisées.\n\n• Amazon EKS : Déploiement Kubernetes managé AWS — namespaces, services ClusterIP/LoadBalancer, Deployments avec readiness/liveness probes et autoscaling horizontal (HPA).',
    technologie : 'Docker, Docker Compose, Kubernetes (K8s), Amazon EKS, Multi-stage builds, Cloud Native',
    dateDebut   : '2026-04-16',
    dateFin     : '2026-05-30',
    categorie   : 'ODC',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Automatisation d\'Infrastructure (IaC & CI/CD)',
    image       : 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop',
    description : 'Automatisation complète du déploiement infrastructure et du cycle de livraison logiciel.\n\n• Terraform (IaC) : Provisionnement AWS reproductible — VPC (sous-réseaux publics/privés, Internet Gateway), EC2 avec groupes de sécurité et rôles IAM, S3 avec versioning et chiffrement SSE. Scripts Bash d\'administration post-déploiement.\n\n• Jenkins CI/CD : Pipeline end-to-end automatisant Git push → Build → Tests → Analyse → Déploiement. Webhooks GitHub pour déclencher les builds à chaque commit.\n\n• SonarQube : Quality Gate bloquant les déploiements non conformes — code smells, vulnérabilités, coverage.',
    technologie : 'Terraform, Jenkins, SonarQube, AWS (VPC, EC2, S3), Bash',
    dateDebut   : '2026-04-01',
    dateFin     : '2026-06-15',
    categorie   : 'ODC',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Audit de Sécurité Automatisé avec Trivy',
    image       : 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop',
    description : 'Renforcement de la posture de sécurité Cloud par l\'automatisation des audits de vulnérabilités.\n\n• Trivy multi-cibles : Images Docker (OS packages, librairies, secrets exposés), fichiers IaC Terraform (misconfigurations CIS), dépendances Node.js et Python.\n\n• Intégration CI/CD : Étape bloquante dans Jenkins — arrêt automatique si CVE CRITICAL ou HIGH détectées. Rapports JSON/SARIF archivés.\n\n• Durcissement Linux : CIS Benchmark — PAM, iptables, fail2ban, audit permissions.\n\n• Documentation : score de risque, CVE identifiées, CVSS scores, plan de remédiation priorisé.',
    technologie : 'Trivy, Docker Security, IaC Scan, Jenkins, DevSecOps, CIS Benchmark',
    dateDebut   : '2026-05-16',
    dateFin     : '2026-07-01',
    categorie   : 'ODC',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Application Web Full Stack MERN — Portfolio',
    image       : 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=400&auto=format&fit=crop',
    description : 'Conception et développement intégral d\'une plateforme web dynamique de gestion de carrière.\n\n• Backend API REST : Node.js/Express sécurisée par JWT et CORS. Persistance MongoDB avec Mongoose (projets, certifications, messages, utilisateurs). CRUD complet avec validation des données.\n\n• Frontend React : Interface responsive avec React Hooks, React Router SPA, dashboard admin protégé par rôles. Design Tailwind CSS mobile-first.\n\n• Fonctionnalités : CRUD projets/certifications, formulaire de contact avec stockage en base, affichage dynamique du portfolio, page CV avec export PDF.',
    technologie : 'MongoDB, Express.js, React.js, Node.js, JWT, Tailwind CSS, API REST, Mongoose',
    dateDebut   : '2026-02-01',
    dateFin     : '2026-07-01',
    categorie   : 'ODC',
    statut      : 'Terminé'
  },

  // ════════════════════════════════════════════
  // ISI — Institut Supérieur d'Informatique  (4 projets)
  // ════════════════════════════════════════════

  {
    libelle     : 'Intégration de l\'IA pour la Gestion Réseau (AIOps)',
    image       : 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop',
    description : 'Mémoire de Licence — Solution AIOps complète : provisionnement cloud → conteneurisation → supervision → IA → détection → alertes → rapports.\n\n• Infrastructure AWS : VPC, EC2 t2.micro Rocky Linux via Terraform (provider.tf, variables.tf, network.tf, security.tf, ec2.tf).\n\n• Docker Compose : 7 services — Prometheus, Grafana, Alertmanager, Node Exporter, SNMP Exporter, Pushgateway, Module IA Python.\n\n• Supervision : scraping 15s, 4 règles d\'alerte (CPU > 80%, mémoire > 85%, trafic > 10 Mo/s, anomaly_score > 0.5).\n\n• Module IA Python : Isolation Forest (100 estimateurs, contamination 5%), évaluation toutes les 60s, webhook Flask.\n\n• Résultats : 70 analyses, 17 anomalies — Précision 92,31% | F1-score 72,73% | Détection en 0,1425s (vs 135s traditionnel).',
    technologie : 'AWS, Terraform, Docker Compose, Rocky Linux, Prometheus, Grafana, Alertmanager, SNMP, Python, Scikit-learn, Isolation Forest, Flask, Pandas, NumPy',
    dateDebut   : '2025-09-01',
    dateFin     : '2026-06-30',
    categorie   : 'ISI',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Gouvernance des Identités, Services Réseau & Messagerie',
    image       : 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=400&auto=format&fit=crop',
    description : 'Gouvernance des identités et infrastructure réseau complète en environnement d\'entreprise.\n\n• OpenLDAP & Active Directory : schémas personnalisés, Unités Organisationnelles (OU), ACL strictes. GPO — déploiement logiciels, restrictions accès, politique mots de passe.\n\n• Services réseau Windows Server : DNS (zones directes/inverses) et DHCP (pools, réservations, relais inter-VLAN).\n\n• Infrastructure Cisco : segmentation multi-VLAN (Admin/Users/Serveurs), routage inter-VLAN router-on-a-stick, trunk/access sur switches Catalyst.\n\n• Exchange Server : installation, boîtes aux lettres, groupes de distribution, connecteurs SMTP, certificat SSL.',
    technologie : 'OpenLDAP, Active Directory, GPO, DNS/DHCP, Cisco IOS, VLAN, Exchange Server, Windows Server, SSL',
    dateDebut   : '2023-11-01',
    dateFin     : '2024-01-31',
    categorie   : 'ISI',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Détection d\'Intrusion avec Wazuh & Intégration API CriminalIP',
    image       : 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=400&auto=format&fit=crop',
    description : 'Infrastructure de détection d\'intrusion, gestion des journaux et surveillance de conformité — projet individuel ISI 2025-2026.\n\n• Environnement : Ubuntu sur machine virtuelle, installation et configuration de Wazuh (SIEM/XDR) avec Elastic Stack. Déploiement d\'un agent Wazuh sur poste Windows via PowerShell.\n\n• Intégration CriminalIP : développement d\'un script Python personnalisé interrogeant l\'API CriminalIP pour enrichir les alertes Wazuh avec le score de réputation des adresses IP. Configuration dans ossec.conf, wrapper shell, gestion des permissions.\n\n• Détection : génération d\'événements réels (tentatives SSH), règles de détection personnalisées (règle 100200), visualisation dans le dashboard Wazuh Discover.\n\n• Résultat : détection automatique des IP malveillantes avec enrichissement threat intelligence en temps réel. 57 captures d\'écran documentant chaque étape.',
    technologie : 'Wazuh, Elastic Stack, CriminalIP API, Python, Ubuntu, Windows Server, SSH, Threat Intelligence, SIEM, XDR',
    dateDebut   : '2025-09-01',
    dateFin     : '2026-06-30',
    categorie   : 'ISI',
    statut      : 'Terminé'
  },

  {
    libelle     : 'Contrôle d\'Accès Réseau & Supervision : OPNsense, AD, Zenarmor & Graylog',
    image       : 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=400&auto=format&fit=crop',
    description : 'Projet de groupe (Licence 3 ASR) — Infrastructure réseau complète de contrôle d\'accès et supervision des activités utilisateurs.\n\n• Hyperviseur Proxmox VE 9.1 : virtualisation de toute l\'infrastructure (OPNsense, Windows Server, clients Windows et Ubuntu) sur un environnement centralisé.\n\n• OPNsense + Active Directory via LDAP : authentification des utilisateurs du domaine sur le pare-feu, politiques de filtrage différenciées par groupe AD. Portail captif, règles par groupe.\n\n• Zenarmor (inspection applicative) : identification en temps réel des sites visités, applications utilisées et bande passante consommée par utilisateur.\n\n• Active Directory : création des groupes de sécurité, utilisateurs, compte de service svc_ldap, promotion du serveur en contrôleur de domaine.\n\n• Graylog : centralisation de tous les logs pour l\'analyse et l\'audit. Serveur NTP pour la cohérence des horodatages.',
    technologie : 'Proxmox VE, OPNsense, Active Directory, LDAP, Zenarmor, Graylog, Windows Server, NTP, Pare-feu, Virtualisation',
    dateDebut   : '2025-09-01',
    dateFin     : '2026-06-30',
    categorie   : 'ISI',
    statut      : 'Terminé'
  }

];

const certificationsDemo = [
  {
    libelle      : 'AWS Certified Cloud Practitioner',
    organisation : 'Amazon Web Services',
    statut       : 'Terminé',
    image        : '☁️',
    dateObtention: '2026',
    lien         : 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
  },
  {
    libelle      : 'CCNA 1 : Introduction to Networks',
    organisation : 'Cisco Networking Academy',
    statut       : 'Terminé',
    image        : '🌐',
    dateObtention: '2026',
    lien         : 'https://www.netacad.com/'
  },
  {
    libelle      : 'CCNA 2 : Switching, Routing & Wireless',
    organisation : 'Cisco Networking Academy',
    statut       : 'Terminé',
    image        : '🔀',
    dateObtention: '2026',
    lien         : 'https://www.netacad.com/'
  },
  {
    libelle      : 'CCNA 3 : Enterprise Networking, Security & Automation',
    organisation : 'Cisco Networking Academy',
    statut       : 'Terminé',
    image        : '🛡️',
    dateObtention: '2026',
    lien         : 'https://www.netacad.com/'
  },
  {
    libelle      : 'Linux Essentials',
    organisation : 'NDG / LPI',
    statut       : 'Terminé',
    image        : '🐧',
    dateObtention: '2026',
    lien         : 'https://www.lpi.org/'
  }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || process.env.MONGO_URI);
    console.log('🚀 Connexion à MongoDB pour le seeding...');

    const deletedProjects = await Projet.deleteMany({});
    console.log(`🧹 ${deletedProjects.deletedCount} projets supprimés.`);

    const deletedCerts = await Certification.deleteMany({});
    console.log(`🧹 ${deletedCerts.deletedCount} certifications supprimées.`);

    await User.deleteMany({});

    const insertedProjects = await Projet.insertMany(projetsDemo);
    console.log(`✅ ${insertedProjects.length} projets ajoutés !`);

    const insertedCerts = await Certification.insertMany(certificationsDemo);
    console.log(`✅ ${insertedCerts.length} certifications ajoutées !`);

    console.log(`📊 Projets en base : ${await Projet.countDocuments()}`);
    console.log(`📊 Certifications en base : ${await Certification.countDocuments()}`);

    await User.create({ email: 'soxnanna@gmail.com', password: 'Passer@1' });
    console.log('👤 Admin créé : soxnanna@gmail.com / Passer@1');

    return { success: true, projects: insertedProjects.length, certifications: insertedCerts.length };
  } catch (error) {
    console.error('❌ Erreur :', error);
    return { success: false, error: error.message };
  }
};

// Exécuter seulement si appelé directement
if (require.main === module) {
  seedDB().then(() => process.exit(0)).catch(() => process.exit(1));
}

module.exports = seedDB;
