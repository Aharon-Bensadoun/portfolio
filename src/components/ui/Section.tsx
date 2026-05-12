import type { ReactNode } from 'react'

export const Section = ({
  id,
  children,
  className = '',
}: {
  id?: string
  children: ReactNode
  className?: string
}) => (
  <section id={id} className={`relative py-20 sm:py-28 lg:py-32 ${className}`}>
    <div className="container-page">{children}</div>
  </section>
)
