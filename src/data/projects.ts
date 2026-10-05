import { portfolioProjects } from './portfolio'

export type AppStat = { value: string; label: string }

export type AppProject = {
  name: string
  tagline: string
  description: string
  imageSrc?: string
  imagePosition?: string
  accentColor: string
  stats: AppStat[]
  badge: string
}

export type MobileApp = AppProject

const appProjects = portfolioProjects.filter((p) => ['Web', 'PWA', 'Tools', 'Music'].includes(p.category))

export const mobileApps: MobileApp[] = appProjects.slice(0, 8).map((p) => ({
  name: p.name,
  tagline: p.category,
  description: p.description,
  accentColor: '#FF7A1A',
  stats: [
    { value: p.tech.length.toString(), label: 'technologies' },
    { value: p.visibility ?? 'Public', label: 'visibility' },
    { value: p.live ? 'Live' : 'Build', label: 'status' },
  ],
  badge: p.category,
}))

export const webApps: AppProject[] = portfolioProjects.map((p) => ({
  name: p.name,
  tagline: p.category,
  description: p.description,
  accentColor: '#FF7A1A',
  stats: [
    { value: p.tech.length.toString(), label: 'technologies' },
    { value: p.visibility ?? 'Public', label: 'visibility' },
    { value: p.live ? 'Live' : 'Build', label: 'status' },
  ],
  badge: p.category,
}))

export type { PortfolioProject }
