export type ProjectCategory =
  | 'ai_platform'
  | 'healthcare'
  | 'ecommerce'
  | 'tools'
  | 'religious'

export type DeploymentStatus = 'production_public' | 'production_client' | 'in_development'

export type Project = {
  slug: string
  name: string
  category: ProjectCategory
  highlight?: boolean
  wide?: boolean
  tagline: { en: string; fr: string; he: string }
  description: { en: string; fr: string; he: string }
  stack: string[]
  metrics?: { label: { en: string; fr: string; he: string }; value: string }[]
  repoUrl?: string
  demoUrl?: string
  videoUrl?: string
  deploymentStatus?: DeploymentStatus
  accent?: 'cyan' | 'violet' | 'pink' | 'amber' | 'emerald'
}

export const FEATURED_DEMO_SLUGS = ['ai-nexus', 'eva-medical-ai', 'oncomatch', 'koli'] as const

export const REPO_BUTTON_SLUGS = ['flufy', 'koli'] as const

export const showRepoButton = (slug: string): boolean =>
  (REPO_BUTTON_SLUGS as readonly string[]).includes(slug)

export const getVimeoEmbedUrl = (url: string): string => {
  const id = url.match(/vimeo\.com\/(\d+)/)?.[1]
  return id ? `https://player.vimeo.com/video/${id}` : url
}

export const PROJECTS: Project[] = [
  {
    slug: 'ai-nexus',
    name: 'AI Nexus',
    category: 'ai_platform',
    highlight: true,
    accent: 'violet',
    deploymentStatus: 'production_client',
    tagline: {
      en: 'Governed enterprise AI gateway — one entry point for all your products',
      fr: 'Gateway IA gouvernée — point d’entrée unique pour tous vos produits',
      he: 'Gateway AI מבוקר — נקודת כניסה אחת לכל המוצרים שלך',
    },
    description: {
      en: 'Unified API for text, image, document, audio, and chat with multi-provider routing, SSE streaming, versioned prompts, project-level ACLs, and usage analytics. Deployed in production at the client and powers CareFlow, OncoMatch, Eva, Judayka, and more.',
      fr: 'API unifiée pour texte, image, document, audio et chat avec routage multi-fournisseurs, streaming SSE, prompts versionnés, ACL par projet et analytics. Déployé en production chez le client et alimente CareFlow, OncoMatch, Eva, Judayka, etc.',
      he: 'API מאוחד לטקסט, תמונה, מסמך, אודיו וצ\'אט עם ניתוב רב-ספקים, streaming SSE, prompts בגרסאות, ACLs לפרויקט ואנליטיקה. פרוס בפרודקשן אצל הלקוח ומפעיל את CareFlow, OncoMatch, Eva, Judayka ועוד.',
    },
    stack: ['.NET 8', 'EF Core', 'PostgreSQL', 'React + TS', 'Azure OpenAI', 'AWS Bedrock', 'Docker'],
    metrics: [
      { label: { en: 'Apps powered', fr: 'Apps alimentées', he: 'אפליקציות שמופעלות' }, value: '8+' },
      { label: { en: 'Providers', fr: 'Fournisseurs', he: 'ספקים' }, value: '5' },
      { label: { en: 'Auth modes', fr: 'Modes d’auth', he: 'מצבי אימות' }, value: 'JWT / AD / API-Key' },
    ],
    repoUrl: 'https://github.com/Aharon-Bensadoun/AINexus',
    videoUrl: 'https://vimeo.com/1202369276',
  },
  {
    slug: 'eva-medical-ai',
    name: 'Eva Medical AI',
    category: 'healthcare',
    highlight: true,
    accent: 'cyan',
    deploymentStatus: 'production_public',
    tagline: {
      en: 'Multi-specialty medical AI documentation platform',
      fr: 'Plateforme IA de documentation médicale multi-spécialités',
      he: 'פלטפורמת AI לתיעוד רפואי רב-תחומית',
    },
    description: {
      en: 'Voice dictation into structured clinical reports, Ozen consultation recording, medical image and DICOM analysis, and multi-tenant practice management — HDS/GDPR compliant and live at app.evamedical.ai.',
      fr: 'Dictée vocale en comptes rendus structurés, enregistrement de consultations Ozen, analyse d’images médicales et DICOM, gestion de cabinet multi-tenant — conforme HDS/RGPD, en ligne sur app.evamedical.ai.',
      he: 'דיקטציה קולית לדוחות קליניים מובנים, הקלטת ייעוצים Ozen, ניתוח תמונות רפואיות ו-DICOM, וניהול מרפאה מולטי-טננט — תואם HDS/GDPR, באוויר ב-app.evamedical.ai.',
    },
    stack: ['.NET 8', 'React 18 + TS', 'PostgreSQL', 'Stripe', 'AWS Bedrock', 'Gemini', 'Terraform'],
    metrics: [
      { label: { en: 'Specialties', fr: 'Spécialités', he: 'תחומים' }, value: 'Multi' },
      { label: { en: 'Report types', fr: 'Types de rapports', he: 'סוגי דוחות' }, value: '6+' },
      { label: { en: 'AI providers', fr: 'Fournisseurs IA', he: 'ספקי AI' }, value: '4' },
    ],
    repoUrl: 'https://github.com/Aharon-Bensadoun/EvaMedicalAI',
    demoUrl: 'https://app.evamedical.ai',
    videoUrl: 'https://vimeo.com/1202419817',
  },
  {
    slug: 'judayka',
    name: 'Judayka Marketplace',
    category: 'ecommerce',
    highlight: true,
    accent: 'amber',
    deploymentStatus: 'in_development',
    tagline: {
      en: 'Multi-tenant Judaica marketplace with AI tools for vendors',
      fr: 'Marketplace Judaica multi-tenant avec outils IA pour vendeurs',
      he: 'מרקטפלייס Judaica מולטי-טננט עם כלי AI לסוחרים',
    },
    description: {
      en: 'Marketplace, Vendor, and Admin apps with multi-payment checkout, homepage builder, fraud detection, vendor subscriptions, and EN/FR/HE support. AI Nexus on the vendor side improves titles, descriptions, tags, SEO, review replies, and message drafts — without exposing API keys to the frontend.',
      fr: 'Apps Marketplace, Vendor et Admin avec checkout multi-paiements, homepage builder, détection de fraude, abonnements vendeurs et support EN/FR/HE. AI Nexus côté vendeur améliore titres, descriptions, tags, SEO, réponses aux avis et brouillons de messages — sans exposer la clé API au frontend.',
      he: 'אפליקציות Marketplace, Vendor ו-Admin עם checkout רב-תשלומים, homepage builder, זיהוי הונאה, מנויי סוחרים ותמיכה EN/FR/HE. AI Nexus בצד הסוחר משפר כותרות, תיאורים, תגים, SEO, תגובות לביקורות וטיוטות הודעות — בלי לחשוף מפתח API ל-frontend.',
    },
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'React 19', 'Socket.io', 'GCP Cloud Run', 'Terraform'],
    metrics: [
      { label: { en: 'Prisma models', fr: 'Modèles Prisma', he: 'מודלי Prisma' }, value: '81+' },
      { label: { en: 'Payment providers', fr: 'Fournisseurs paiement', he: 'ספקי תשלום' }, value: '3' },
      { label: { en: 'Languages', fr: 'Langues', he: 'שפות' }, value: 'EN/FR/HE' },
    ],
    repoUrl: 'https://github.com/Aharon-Bensadoun/Judayka',
  },
  {
    slug: 'oncomatch',
    name: 'OncoMatch',
    category: 'healthcare',
    highlight: true,
    accent: 'cyan',
    deploymentStatus: 'production_client',
    tagline: {
      en: 'Oncology clinical trial matching at the point of care',
      fr: 'Matching d’essais cliniques oncologiques au point de soin',
      he: 'התאמת ניסויים קליניים אונקולוגיים בנקודת הטיפול',
    },
    description: {
      en: 'Syncs the oncologist’s appointment schedule, analyzes each patient’s history with AI, and recommends eligible clinical trials. Bilingual HE/EN interface — in production at the client (Hadassah).',
      fr: 'Synchronise les rendez-vous de l’oncologue, analyse l’historique de chaque patient via IA et recommande les essais cliniques éligibles. Interface bilingue HE/EN — en production chez le client (Hadassah).',
      he: 'מסנכרן את תורי האונקולוג, מנתח את היסטוריית כל מטופל באמצעות AI וממליץ על ניסויים קליניים מתאימים. ממשק דו-לשוני HE/EN — בפרודקשן אצל הלקוח (הדסה).',
    },
    stack: ['.NET 8', 'React 18 + TS', 'PostgreSQL', 'i18n HE/EN', 'AD Auth', 'Recharts'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/OncoMatch',
    videoUrl: 'https://vimeo.com/1202369275',
  },
  {
    slug: 'careflow',
    name: 'CareFlow (HadassahLeads)',
    category: 'healthcare',
    accent: 'cyan',
    deploymentStatus: 'production_client',
    tagline: {
      en: 'AI follow-up detection in the hospital information system',
      fr: 'Détection IA de patients nécessitant un suivi dans le SI hospitalier',
      he: 'זיהוי AI של מטופלים הזקוקים למעקב במערכת המידע בבית החולים',
    },
    description: {
      en: 'Nightly ingestion of Oracle medical reports into the AI Nexus pipeline surfaces follow-up leads to clinicians. AD SSO — in production at the client.',
      fr: 'Ingestion nocturne des comptes rendus Oracle dans le pipeline AI Nexus, puis présentation des leads de suivi aux cliniciens. SSO AD — en production chez le client.',
      he: 'קליטה לילית של דוחות רפואיים מאורקל ל-pipeline של AI Nexus, והצגת leads למעקב לקלינאים. SSO AD — בפרודקשן אצל הלקוח.',
    },
    stack: ['.NET 8', 'EF Core', 'PostgreSQL', 'Oracle', 'React + TS', 'AD'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/HadassahLeads',
  },
  {
    slug: 'casefinder',
    name: 'CaseFinder',
    category: 'ai_platform',
    accent: 'violet',
    tagline: {
      en: 'Configurable Oracle-to-AI pipeline for enterprise screening',
      fr: 'Pipeline IA configurable Oracle → IA pour screener des données',
      he: 'Pipeline AI ניתן להגדרה מ-Oracle ל-AI לסינון נתוני ארגון',
    },
    description: {
      en: 'Extract → Deduplicate → Analyze → Store with configurable use cases, four-tier RBAC, and AI Nexus integration. Pluggable pipeline for screening Oracle data with structured analysis stored for review.',
      fr: 'Extract → Dédoublonnage → Analyse → Store avec cas d’usage configurables, RBAC à 4 niveaux et intégration AI Nexus. Pipeline modulaire pour screener des données Oracle et stocker des analyses structurées.',
      he: 'Extract → ניכוי כפילויות → ניתוח → שמירה עם use cases ניתנים להגדרה, RBAC ב-4 שכבות ואינטגרציית AI Nexus. Pipeline מודולרי לסינון נתוני Oracle ושמירת ניתוחים מובנים.',
    },
    stack: ['.NET 8', 'PostgreSQL', 'Oracle', 'React + TS', 'AI Nexus', 'RBAC'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/CaseFinder',
  },
  {
    slug: 'koli',
    name: 'Koli',
    category: 'tools',
    highlight: true,
    accent: 'amber',
    deploymentStatus: 'production_client',
    tagline: {
      en: 'Real-time Windows speech transcription and meeting assistant',
      fr: 'Transcription vocale temps réel et assistant de réunion pour Windows',
      he: 'תמלול דיבור בזמן אמת ועוזר פגישות ל-Windows',
    },
    description: {
      en: 'Captures microphone and system audio (Zoom/Teams) with Whisper and gpt-4o-transcribe. Meeting mode with diarization, professional rewriting, voice assistant (Alt Gr), and auto-typing into the active app — in production at the client.',
      fr: 'Capture micro et audio système (Zoom/Teams) avec Whisper et gpt-4o-transcribe. Mode réunion avec diarisation, réécriture professionnelle, assistant vocal (Alt Gr) et saisie automatique dans l’app active — en production chez le client.',
      he: 'לוכד מיקרופון ואודיו מערכת (Zoom/Teams) עם Whisper ו-gpt-4o-transcribe. מצב פגישה עם diarization, כתיבה מחדש מקצועית, עוזר קולי (Alt Gr) והקלדה אוטומטית לאפליקציה הפעילה — בפרודקשן אצל הלקוח.',
    },
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'OpenAI Whisper', 'GCS', 'Terraform'],
    metrics: [
      { label: { en: 'Meeting mode', fr: 'Mode réunion', he: 'מצב פגישה' }, value: 'Yes' },
      { label: { en: 'STT providers', fr: 'Fournisseurs STT', he: 'ספקי STT' }, value: '2' },
      { label: { en: 'Platform', fr: 'Plateforme', he: 'פלטפורמה' }, value: 'Windows' },
    ],
    repoUrl: 'https://github.com/Aharon-Bensadoun/Koli',
    videoUrl: 'https://vimeo.com/1202369277',
  },
  {
    slug: 'flufy',
    name: 'Flufy',
    category: 'tools',
    wide: true,
    accent: 'emerald',
    tagline: {
      en: 'Local-first chat UI for Ollama models',
      fr: 'Client chat local-first pour modèles Ollama',
      he: 'ממשק צ\'אט local-first למודלי Ollama',
    },
    description: {
      en: 'Modern React chat client for self-hosted Ollama models. Dark and light themes, configurable endpoint, and one-command Docker deploy. Open-source on GitHub.',
      fr: 'Client chat React moderne pour modèles Ollama self-hosted. Thèmes dark/light, endpoint configurable et déploiement Docker en une commande. Projet OSS public sur GitHub.',
      he: 'קליינט צ\'אט React מודרני למודלי Ollama מקומיים. ערכות נושא dark/light, endpoint ניתן להגדרה ופריסת Docker בפקודה אחת. פרויקט OSS ציבורי ב-GitHub.',
    },
    stack: ['React 18', 'TypeScript', 'Material-UI', 'Docker', 'Ollama API'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/Flufy',
  },
]
