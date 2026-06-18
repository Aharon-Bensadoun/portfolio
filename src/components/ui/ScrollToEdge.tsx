import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown, ChevronUp } from 'lucide-react'

const BOTTOM_THRESHOLD = 120

export const ScrollToEdge = () => {
  const { t } = useTranslation()
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const { scrollY, innerHeight } = window
      const { scrollHeight } = document.documentElement
      setAtBottom(scrollY + innerHeight >= scrollHeight - BOTTOM_THRESHOLD)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const scrollTo = (top: number) => {
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={() => scrollTo(atBottom ? 0 : document.documentElement.scrollHeight)}
      aria-label={atBottom ? t('scroll.toTop') : t('scroll.toBottom')}
      className="fixed bottom-6 end-6 z-30 inline-grid h-11 w-11 place-items-center rounded-full border border-line bg-bg/85 text-ink-muted shadow-lg backdrop-blur-xl transition-all duration-200 hover:border-line-strong hover:bg-bg-card hover:text-ink active:scale-95 cursor-pointer"
    >
      {atBottom ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
    </button>
  )
}
