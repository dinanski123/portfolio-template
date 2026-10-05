import { Briefcase, Sparkle, Globe, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  firstName: string
  handle: string
  role: string
  avatarSrc: string
  verifiedLabel: string
  email: string
  location: string
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: { body: string; portraitSrc: string; portraitAlt: string }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Ferdinand De Gracia',
  firstName: 'Ferdinand',
  handle: '@ferdz',
  role: 'AI systems builder · full-stack developer · digital creator',
  avatarSrc: 'https://avatars.githubusercontent.com/u/316400087?v=4',
  verifiedLabel: 'Ferdz portfolio profile',
  email: '',
  location: 'Philippines · GMT+8',
  stats: [
    { value: '20+', label: 'builds', Icon: Briefcase },
    { value: 'AI + Web', label: 'focus', Icon: Sparkle },
    { value: 'GMT+8', label: 'timezone', Icon: Globe },
  ],
  displayName: { line1: 'I build useful', line2: 'digital systems.' },
  hero: {
    body: 'I build web apps, AI-assisted tools, automation workflows, media products and cloud-powered systems — from idea to working software.',
    portraitSrc: 'https://avatars.githubusercontent.com/u/316400087?v=4',
    portraitAlt: 'Ferdinand De Gracia',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/dinanski123', iconPath: '/icons/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/ferdinanddegracia', iconPath: '/icons/linkedin.svg' },
  ],
}
