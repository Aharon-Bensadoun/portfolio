export type ProjectCategory =
  | 'ai_platform'
  | 'healthcare'
  | 'ecommerce'
  | 'tools'
  | 'religious'

export type Project = {
  slug: string
  name: string
  category: ProjectCategory
  highlight?: boolean
  tagline: { en: string; fr: string; he: string }
  description: { en: string; fr: string; he: string }
  stack: string[]
  metrics?: { label: { en: string; fr: string; he: string }; value: string }[]
  repoUrl?: string
  demoUrl?: string
  accent?: 'cyan' | 'violet' | 'pink' | 'amber' | 'emerald'
}

export const PROJECTS: Project[] = [
  {
    slug: 'ai-nexus',
    name: 'AI Nexus (UnifiedAIConnector)',
    category: 'ai_platform',
    highlight: true,
    accent: 'violet',
    tagline: {
      en: 'Enterprise AI gateway routing across providers',
      fr: 'Gateway IA d’entreprise qui route entre fournisseurs',
      he: 'Gateway AI ארגוני שמנתב בין ספקים',
    },
    description: {
      en: 'A single governed API for text, image, document, audio, and chat — routing across Azure OpenAI, AWS Bedrock, Whisper and more with streaming (SSE), prompt management, fallback, project-level ACLs, and usage analytics. Powers CareFlow, OncoMatch, SurgAI, Judayka, Eva and more.',
      fr: 'Une API unifiée et gouvernée pour texte, image, document, audio et chat — routage entre Azure OpenAI, AWS Bedrock, Whisper et plus, avec streaming (SSE), gestion des prompts, fallback, ACL par projet, et analytics. Alimente CareFlow, OncoMatch, SurgAI, Judayka, Eva.',
      he: 'API מאוחד ומבוקר לטקסט, תמונה, מסמך, אודיו וצ\'אט — ניתוב בין Azure OpenAI, AWS Bedrock, Whisper ועוד עם streaming, ניהול prompts, fallback, ACLs לפרויקט, ואנליטיקה. מפעיל את CareFlow, OncoMatch, SurgAI, Judayka, Eva.',
    },
    stack: ['.NET 8', 'EF Core', 'PostgreSQL', 'React + TS', 'Azure OpenAI', 'AWS Bedrock', 'Docker'],
    metrics: [
      { label: { en: 'Apps powered', fr: 'Apps alimentées', he: 'אפליקציות שמופעלות' }, value: '8+' },
      { label: { en: 'Providers', fr: 'Fournisseurs', he: 'ספקים' }, value: '5' },
      { label: { en: 'Auth modes', fr: 'Modes d’auth', he: 'מצבי אימות' }, value: 'JWT / AD / API-Key' },
    ],
    repoUrl: 'https://github.com/Aharon-Bensadoun/UnifiedAIConnector',
  },
  {
    slug: 'eva-medical-ai',
    name: 'Eva Medical AI',
    category: 'healthcare',
    highlight: true,
    accent: 'cyan',
    tagline: {
      en: 'Multi-tenant AI SaaS for dental practices',
      fr: 'SaaS IA multi-tenant pour cabinets dentaires',
      he: 'SaaS AI מולטי-טננט למרפאות שיניים',
    },
    description: {
      en: 'AI-powered practice management: X-ray analysis (Claude 3.5 Sonnet / Pixtral / GPT-4 Vision / Gemini), voice-dictated reports, six report types, tiered Stripe plans, multi-tenant admin back-office. Multi-provider failover by default.',
      fr: 'Gestion de cabinet basée IA : analyse de radios (Claude 3.5 Sonnet / Pixtral / GPT-4 Vision / Gemini), rapports dictés à la voix, 6 types de rapports, abonnements Stripe échelonnés, back-office multi-tenant. Failover multi-fournisseurs par défaut.',
      he: 'ניהול מרפאה מבוסס AI: ניתוח צילומי רנטגן (Claude 3.5 Sonnet / Pixtral / GPT-4 Vision / Gemini), דוחות מוכתבים בקול, 6 סוגי דוחות, מנויי Stripe מדורגים, back-office מולטי-טננט. Failover רב-ספקים כברירת מחדל.',
    },
    stack: ['.NET 8', 'React 18 + TS', 'PostgreSQL', 'Stripe', 'AWS Bedrock', 'Gemini', 'Terraform'],
    metrics: [
      { label: { en: 'Report types', fr: 'Types de rapports', he: 'סוגי דוחות' }, value: '6' },
      { label: { en: 'AI providers', fr: 'Fournisseurs IA', he: 'ספקי AI' }, value: '4' },
      { label: { en: 'Billing', fr: 'Facturation', he: 'חיוב' }, value: 'Stripe tiers' },
    ],
    repoUrl: 'https://github.com/Aharon-Bensadoun/EvaMedicalAI',
  },
  {
    slug: 'judayka',
    name: 'Judayka Marketplace',
    category: 'ecommerce',
    highlight: true,
    accent: 'amber',
    tagline: {
      en: 'Multi-tenant marketplace with AI vendor tools',
      fr: 'Marketplace multi-tenant avec outils IA pour vendeurs',
      he: 'מרקטפלייס מולטי-טננט עם כלי AI לסוחרים',
    },
    description: {
      en: 'Full marketplace (Marketplace / Vendor / Admin apps) for Judaica & Sfarim Stam: checkout (Stripe/PayPal/Airwallex), homepage builder, subscriptions, gift cards, fraud, 17Track shipping, GDPR, EN/FR/HE with RTL. AI Nexus generates product titles/descriptions/tags for vendors.',
      fr: 'Marketplace complet (apps Marketplace / Vendor / Admin) pour Judaica & Sfarim Stam : checkout (Stripe/PayPal/Airwallex), builder de homepage, abonnements, cartes cadeaux, fraude, expedition 17Track, RGPD, EN/FR/HE avec RTL. AI Nexus génère titres / descriptions / tags produits.',
      he: 'מרקטפלייס מלא (אפליקציות Marketplace / Vendor / Admin) ל-Judaica וספרי סת"ם: checkout (Stripe/PayPal/Airwallex), homepage builder, מנויים, גיפט קארדס, הונאה, משלוחים 17Track, GDPR, EN/FR/HE עם RTL. AI Nexus מייצר כותרות / תיאורים / תגים.',
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
    accent: 'cyan',
    tagline: {
      en: 'AI oncology trial-matching at the point of care',
      fr: 'Matching IA d’essais oncologiques au lit du patient',
      he: 'התאמת ניסויים אונקולוגיים מבוססת AI בנקודת הטיפול',
    },
    description: {
      en: 'Pulls an oncologist’s 7-day appointment list, reads each patient’s history, and recommends matching clinical trials. Bilingual HE/EN interface, JWT + AD auth, React Query + Recharts dashboards.',
      fr: 'Récupère la liste de RDV d’un onco sur 7 jours, lit l’historique de chaque patient, et recommande les essais cliniques correspondants. Interface bilingue HE/EN, auth JWT + AD, dashboards React Query + Recharts.',
      he: 'מושך את רשימת התורים של רופא אונקולוגי לשבוע, קורא את ההיסטוריה של כל מטופל, וממליץ על ניסויים מתאימים. ממשק דו-לשוני HE/EN, JWT + AD, dashboards של React Query + Recharts.',
    },
    stack: ['.NET 8', 'React 18 + TS', 'PostgreSQL', 'i18n HE/EN', 'AD Auth', 'Recharts'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/OncoMatch',
  },
  {
    slug: 'careflow',
    name: 'CareFlow (HadassahLeads)',
    category: 'healthcare',
    accent: 'cyan',
    tagline: {
      en: 'AI-driven follow-up detection across hospital records',
      fr: 'Détection IA de suivis dans le dossier patient hospitalier',
      he: 'איתור מטופלים למעקב מבוסס AI במידע בית-החולים',
    },
    description: {
      en: 'Ingests medical reports from Oracle, runs them through the AI Connector to detect follow-up needs ("leads"), and surfaces them to clinicians. Encrypted connection strings, AD SSO, nightly batch AI worker.',
      fr: 'Ingère les comptes-rendus depuis Oracle, les passe dans l’AI Connector pour détecter les suivis nécessaires (« leads »), puis les présente aux cliniciens. Connection strings chiffrées, SSO AD, worker batch nocturne.',
      he: 'בולע דוחות רפואיים מאורקל, מעביר אותם דרך ה-AI Connector לאיתור צורכי מעקב, וחושף אותם לקלינאים. Connection strings מוצפנים, SSO AD, worker batch לילי.',
    },
    stack: ['.NET 8', 'EF Core', 'PostgreSQL', 'Oracle', 'React + TS', 'AD'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/HadassahLeads',
  },
  {
    slug: 'surgai',
    name: 'SurgAI',
    category: 'healthcare',
    accent: 'cyan',
    tagline: {
      en: 'ML-powered surgery duration prediction for OR planning',
      fr: 'Prédiction ML de la durée des chirurgies pour planning OR',
      he: 'חיזוי ML של משך ניתוחים לתכנון חדר ניתוח',
    },
    description: {
      en: 'OR planning tool combining live OR data with an ONNX regression model predicting surgery duration from patient/procedure features. End-to-end Python ML pipeline (data prep → ONNX → .NET inference) with integration tests.',
      fr: 'Outil de planning OR combinant données OR temps réel et modèle ONNX de régression prédisant la durée d’une chir à partir des features patient/procédure. Pipeline ML Python end-to-end (prep → ONNX → inférence .NET) avec tests d’intégration.',
      he: 'כלי תכנון חדר ניתוח שמשלב נתונים בזמן אמת עם מודל ONNX לחיזוי משך ניתוח על בסיס פיצ\'רים של מטופל ופרוצדורה. Pipeline שלם בפייתון (הכנה → ONNX → inference ב-.NET) עם integration tests.',
    },
    stack: ['.NET 8', 'Python ML', 'ONNX', 'Oracle', 'React + TS', 'pytest'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/SurgAI',
  },
  {
    slug: 'casefinder',
    name: 'CaseFinder',
    category: 'ai_platform',
    accent: 'violet',
    tagline: {
      en: 'Generic AI pipeline for screening enterprise data',
      fr: 'Pipeline IA générique pour screener des données entreprise',
      he: 'Pipeline AI כללי לסינון נתוני ארגון',
    },
    description: {
      en: 'Configurable pipeline that runs Oracle queries, batches records to an AI service, stores structured analysis. Pluggable Extract → Deduplicate → Analyze → Store, 4-tier RBAC, encrypted secrets via ConfigCrypto.',
      fr: 'Pipeline configurable qui exécute des requêtes Oracle, envoie les enregistrements par batch à un service IA, et stocke les analyses structurées. Extract → Dédoublonnage → Analyse → Store, RBAC 4 niveaux, secrets chiffrés via ConfigCrypto.',
      he: 'Pipeline שניתן להגדרה: מריץ שאילתות Oracle, שולח רשומות בבאטצ\'ים לשירות AI, ושומר תוצאות מובנות. Extract → ניכוי כפילויות → ניתוח → שמירה, RBAC ב-4 שכבות, סודות מוצפנים דרך ConfigCrypto.',
    },
    stack: ['.NET 8', 'PostgreSQL', 'Oracle', 'React + TS', 'AI Nexus', 'RBAC'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/CaseFinder',
  },
  {
    slug: 'voicetranscriber',
    name: 'VoiceTranscriber',
    category: 'tools',
    accent: 'emerald',
    tagline: {
      en: 'Real-time Windows dictation with Whisper + GPT rewrite',
      fr: 'Dictée Windows temps réel avec Whisper + réécriture GPT',
      he: 'הכתבה בזמן אמת ב-Windows עם Whisper + שכתוב GPT',
    },
    description: {
      en: 'Captures mic via WASAPI, transcribes through Whisper (batch HTTP or gpt-realtime WebSocket), optionally rewrites with GPT-4o, types into the active window. Hallucination filter, auto-language detection, on-prem mode with speaker diarization.',
      fr: 'Capture micro via WASAPI, transcription Whisper (HTTP batch ou WebSocket gpt-realtime), réécriture optionnelle via GPT-4o, frappe dans la fenêtre active. Filtre d’hallucination, détection auto de langue, mode on-prem avec diarisation.',
      he: 'לוכד מיקרופון דרך WASAPI, מתמלל ב-Whisper (HTTP או WebSocket של gpt-realtime), אופציה לשכתוב ב-GPT-4o, מקליד לחלון הפעיל. סינון הזיות, זיהוי שפה אוטומטי, מצב on-prem עם זיהוי דוברים.',
    },
    stack: ['.NET 8', 'WinForms', 'NAudio', 'Whisper', 'GPT-4o', 'DPAPI'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/VoiceTranscriber',
  },
  {
    slug: 'nano-banana-editor',
    name: 'NanoBananaEditor',
    category: 'tools',
    highlight: true,
    accent: 'pink',
    tagline: {
      en: 'Conversational AI image editor with mask-painting',
      fr: 'Editeur d’image IA conversationnel avec peinture de masques',
      he: 'עורך תמונות AI שיחתי עם ציור מסכות',
    },
    description: {
      en: 'Production-grade web studio for AI image generation & editing: region-aware editing via painted masks, reference images, variant comparison, full undo/redo, IndexedDB offline cache, SynthID watermarking. Packaged as an Android APK via Capacitor.',
      fr: 'Studio web pro pour génération & édition IA d’images : édition par régions avec masques peints, images de référence, comparaison de variantes, undo/redo complet, cache offline IndexedDB, watermarking SynthID. Packagé en APK Android via Capacitor.',
      he: 'סטודיו ווב מקצועי ליצירה ועריכת תמונות AI: עריכה אזורית עם מסכות מצוירות, תמונות התייחסות, השוואת ואריאציות, undo/redo מלא, cache offline ב-IndexedDB, watermarking של SynthID. ארוז כ-APK ל-Android דרך Capacitor.',
    },
    stack: ['React 18 + TS', 'Vite', 'Tailwind', 'Konva.js', 'Gemini 2.5 / 3 Pro Image', 'Capacitor'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/NanoBananaEditor',
    demoUrl: 'https://nanobananaeditor.dev',
  },
  {
    slug: 'drashai',
    name: 'DrashAI',
    category: 'religious',
    accent: 'amber',
    tagline: {
      en: 'Multilingual AI assistant for Divrei Torah grounded in Sefaria',
      fr: 'Assistant IA multilingue pour Divrei Torah sourcés Sefaria',
      he: 'עוזר AI רב-לשוני לדברי תורה מבוסס Sefaria',
    },
    description: {
      en: 'EN/FR/HE assistant that searches authentic Sefaria sources and orchestrates AI generation around them. Clean architecture .NET backend, JWT auth, multilingual content workflow.',
      fr: 'Assistant EN/FR/HE qui cherche des sources authentiques sur Sefaria et orchestre la génération IA autour. Backend .NET clean-architecture, auth JWT, workflow multilingue.',
      he: 'עוזר EN/FR/HE שמחפש מקורות אותנטיים ב-Sefaria ומנהל סביבם יצירת AI. Backend ב-.NET clean architecture, JWT, workflow רב-לשוני.',
    },
    stack: ['.NET 8', 'Clean Architecture', 'PostgreSQL', 'Sefaria API', 'AI Nexus'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/DrashAI',
  },
  {
    slug: 'koli',
    name: 'Koli',
    category: 'religious',
    accent: 'amber',
    tagline: {
      en: 'Whisper-powered Devar Torah transcription app',
      fr: 'App de transcription Devar Torah propulsée par Whisper',
      he: 'אפליקציית תמלול דברי תורה מבוססת Whisper',
    },
    description: {
      en: 'Upload audio, transcribe with Whisper, store searchable Torah class transcripts. Production-shaped stack from day one: Prisma, GCS, Google OAuth, Docker, Terraform.',
      fr: 'Upload audio, transcription Whisper, transcripts de cours de Torah recherchables. Stack prête pour la prod dès le début : Prisma, GCS, OAuth Google, Docker, Terraform.',
      he: 'העלאת אודיו, תמלול עם Whisper, שמירת תמלולי שיעורי תורה הניתנים לחיפוש. סטאק מוכן לפרודקשן מהיום הראשון: Prisma, GCS, Google OAuth, Docker, Terraform.',
    },
    stack: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'OpenAI Whisper', 'GCS', 'Terraform'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/Koli',
  },
  {
    slug: 'flufy',
    name: 'Flufy',
    category: 'tools',
    accent: 'emerald',
    tagline: {
      en: 'Local-first chat UI for Ollama LLMs',
      fr: 'UI de chat local-first pour LLMs Ollama',
      he: 'ממשק צ\'אט local-first ל-LLMs של Ollama',
    },
    description: {
      en: 'Clean, modern web client for self-hosted Ollama models. One-command Docker deploy, configurable endpoint, dark/light themes. 10+ stars on GitHub.',
      fr: 'Client web propre et moderne pour modèles Ollama self-hosted. Déploiement Docker en une commande, endpoint configurable, thèmes light/dark. 10+ stars GitHub.',
      he: 'קליינט ווב נקי ומודרני למודלי Ollama מקומיים. פריסת Docker בפקודה אחת, endpoint שניתן להגדרה, ערכות נושא light/dark. 10+ כוכבים ב-GitHub.',
    },
    stack: ['React 18', 'TypeScript', 'Material-UI', 'Docker', 'Ollama API'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/Flufy',
  },
  {
    slug: 'linuxpass',
    name: 'LinuxPass',
    category: 'tools',
    accent: 'emerald',
    tagline: {
      en: 'Centralized Linux password manager with Entra ID SSO',
      fr: 'Gestionnaire centralisé de mots de passe Linux avec SSO Entra ID',
      he: 'מנהל סיסמאות Linux מרכזי עם Entra ID SSO',
    },
    description: {
      en: 'Web app to manage Linux user passwords across a fleet — AES-encrypted credentials pushed/rotated over SSH with a single private key. Entra ID SSO, optional SMS, fully containerized.',
      fr: 'Web app pour gérer les mots de passe utilisateurs Linux sur un parc — credentials AES chiffrés poussés / rotés via SSH avec une clé privée unique. SSO Entra ID, SMS optionnel, full containers.',
      he: 'אפליקציית ווב לניהול סיסמאות משתמשי Linux על פני שרתים — פרטי גישה מוצפנים ב-AES שנדחפים/מתחלפים ב-SSH עם מפתח פרטי יחיד. Entra ID SSO, SMS אופציונלי, מכולות.',
    },
    stack: ['.NET Core MVC', 'SQL Server', 'Entra ID', 'Docker', 'SSH', 'AES'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/LinuxPass',
  },
  {
    slug: 'configcrypto',
    name: 'ConfigCrypto',
    category: 'tools',
    accent: 'emerald',
    tagline: {
      en: 'Drop-in AES encryption for .NET configuration secrets',
      fr: 'Chiffrement AES drop-in pour les secrets de config .NET',
      he: 'הצפנת AES מודולרית לסודות config של .NET',
    },
    description: {
      en: 'Library + CLI that encrypts/decrypts config values so appsettings.json can safely hold enc: prefixed secrets, decrypted at runtime. Used across nearly every .NET project in my stack.',
      fr: 'Lib + CLI qui chiffre/déchiffre les valeurs de config pour qu’appsettings.json puisse stocker des secrets préfixés enc:, déchiffrés au runtime. Utilisé par presque tous mes projets .NET.',
      he: 'ספרייה + CLI שמצפינים/מפענחים ערכי config כך ש-appsettings.json יכול להכיל סודות עם prefix enc:, מפוענחים בזמן ריצה. בשימוש בכל פרויקטי ה-.NET שלי.',
    },
    stack: ['.NET 8', 'AES', 'IConfiguration extension', 'CLI'],
    repoUrl: 'https://github.com/Aharon-Bensadoun/ConfigCrypto',
  },
]
