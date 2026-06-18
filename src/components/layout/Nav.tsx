import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Menu, X } from 'lucide-react'
import { LanguageSwitcher } from './LanguageSwitcher'

const SECTIONS = [
  { id: 'about', key: 'nav.about' },
  { id: 'services', key: 'nav.services' },
  { id: 'approach', key: 'nav.approach' },
  { id: 'demos', key: 'nav.demos' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' },
] as const

export const Nav = () => {
  const { t } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-bg/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#main" className="group flex items-center gap-2.5 text-ink cursor-pointer">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-accent-cyan to-accent-violet text-bg shadow-glow">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
              <path
                d="M5 19 L12 5 L19 19 M8 14 L16 14"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Aharon<span className="text-ink-muted"> · Bensadoun</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3.5 py-2 text-sm text-ink-muted transition-colors hover:text-ink cursor-pointer"
            >
              {t(s.key)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            className="md:hidden inline-grid h-10 w-10 place-items-center rounded-full border border-line text-ink-muted hover:text-ink cursor-pointer"
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-line bg-bg/95 backdrop-blur-xl">
          <nav className="container-page flex flex-col py-3">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm text-ink-muted hover:bg-bg-card hover:text-ink cursor-pointer"
              >
                {t(s.key)}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
