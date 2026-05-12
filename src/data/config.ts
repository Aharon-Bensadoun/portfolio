export const SITE_CONFIG = {
  name: 'Aharon Bensadoun',
  role: 'AI Solutions Architect',
  email: 'bensadounaharon@gmail.com',
  // TODO: Replace with your real LinkedIn URL
  linkedin: 'https://www.linkedin.com/in/aharon-bensadoun-630ab8116/',
  // TODO: Replace with your WhatsApp number in international format (no +, no spaces). Example: '972501234567'
  whatsappNumber: '+972585165080',
  github: 'https://github.com/Aharon-Bensadoun',
  githubUsername: 'Aharon-Bensadoun',
  repoUrl: 'https://github.com/Aharon-Bensadoun/portfolio',
  // Optional: place a video file at public/intro.mp4 or use a YouTube embed URL.
  // If unset, the About section shows an animated placeholder.
  introVideo: null as string | null,
  // Optional: place a square photo at public/avatar.jpg
  avatar: null as string | null,
}

export const getWhatsAppLink = (text?: string): string => {
  const number = SITE_CONFIG.whatsappNumber
  if (!number || number.startsWith('TODO_')) return '#'
  const message = text ? `?text=${encodeURIComponent(text)}` : ''
  return `https://wa.me/${number}${message}`
}

export const getLinkedInLink = (): string => {
  if (SITE_CONFIG.linkedin.includes('TODO_')) return '#'
  return SITE_CONFIG.linkedin
}
