import {
  Network,
  Plug,
  GraduationCap,
  Hammer,
  type LucideIcon,
} from 'lucide-react'

export type ServiceKey = 'gateway' | 'integration' | 'methodology' | 'fullstack'

export type Service = {
  key: ServiceKey
  icon: LucideIcon
  accent: 'cyan' | 'violet' | 'pink' | 'amber'
}

export const SERVICES: Service[] = [
  { key: 'gateway', icon: Network, accent: 'violet' },
  { key: 'integration', icon: Plug, accent: 'cyan' },
  { key: 'methodology', icon: GraduationCap, accent: 'pink' },
  { key: 'fullstack', icon: Hammer, accent: 'amber' },
]
