import { Briefcase, Sparkle, Globe, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

export type Stat = { value: string; label: string; Icon: Icon }

export type Experience = {
  company: string
  title: string
  dates: string
  location?: string
  summary: string
  bullets: string[]
}

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
  summary: string
  skills: string[]
  certification: string
  education: { school: string; degree: string; dates: string }
  experience: Experience[]
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'Ferdinand Degracia',
  firstName: 'Ferdinand',
  handle: '@ferdz',
  role: 'Senior Commissions Analyst | AI Product Builder | Web Apps, Automation & AI-Assisted Engineering Digital Products',
  avatarSrc: 'https://avatars.githubusercontent.com/u/316400087?v=4',
  verifiedLabel: 'Ferdinand Degracia',
  email: '',
  location: 'Makati, National Capital Region, Philippines',
  stats: [
    { value: '20+', label: 'years across technology & operations', Icon: Briefcase },
    { value: 'AI + Web', label: 'product focus', Icon: Sparkle },
    { value: 'GMT+8', label: 'working timezone', Icon: Globe },
  ],
  displayName: { line1: 'I turn ideas into', line2: 'working products.' },
  hero: {
    body: 'Senior Commissions Analyst and independent digital product builder focused on AI-assisted engineering, web and mobile applications, automation, rapid prototyping, and user-focused digital product design.',
    portraitSrc: 'https://avatars.githubusercontent.com/u/316400087?v=4',
    portraitAlt: 'Ferdinand Degracia',
  },
  summary: 'I’m Ferdinand Degracia, a Senior Commissions Analyst and independent digital product builder with a professional background spanning commissions operations, customer service, technical support, business processes, and technology. Alongside my professional career, I created SynthIQ — a growing portfolio and ecosystem of digital products where I turn ideas into working applications through product thinking, AI-assisted engineering and development, automation, and user-focused design.',
  skills: ['Rapid Prototyping', 'User Interface Design', 'Artificial Intelligence (AI)'],
  certification: 'Certificate of Completion - Computer System Servicing NC II',
  education: {
    school: 'STI College',
    degree: "Associate's degree, Information Technology",
    dates: '2003 - 2005',
  },
  experience: [
    {
      company: 'NetFortris, A Sangoma Company',
      title: 'Senior Commissions Analyst',
      dates: 'February 2015 - Present',
      location: 'Makati City',
      summary: 'Supports commissions operations for sales agents and partners/resellers.',
      bullets: [
        'Calculates sales agents and partners/resellers monthly compensations and bonuses.',
        'Generates monthly commission reports for sales based on monthly bookings.',
        'Generates monthly commission reports for partners/resellers based on monthly customer billings.',
        'Makes sure that commission plans and schedules are properly implemented.',
        'Answers inquiries by email, chat, or phone related to sales and partners/resellers commission payouts.',
        'Gathers information and documents related to partner account setup.',
      ],
    },
    {
      company: 'SynthIQ',
      title: 'Creator & Product Builder',
      dates: 'August 2026 - Present',
      summary: 'Created and continue to develop SynthIQ, an independent digital product ecosystem focused on practical web, mobile, automation, media, and AI-assisted engineering digital products.',
      bullets: [
        'Designing and building web and mobile-ready digital products from concept to production.',
        'Developing AI-engineered/assisted applications and product experiences.',
        'Building the SynthIQ portfolio ecosystem as a central showcase for applications and experiments.',
        'Creating standalone products including SynthIQ Media Browser and Motion Studio by SynthIQ.',
        'Building administrative and owner-facing tools for managing portfolio content and project inquiries.',
        'Implementing authentication, access controls, application workflows, and database-backed functionality.',
        'Creating responsive user interfaces with consistent light and dark mode experiences.',
        'Building product download and distribution experiences for Android applications.',
        'Designing product branding and maintaining a consistent visual identity across the SynthIQ ecosystem.',
        'Using AI-assisted development workflows for research, prototyping, coding, debugging, testing, documentation, and iteration.',
        'Developing workflow automation and improving repetitive digital processes.',
        'Managing deployment and continuously improving applications based on product needs and usability.',
      ],
    },
    {
      company: 'West Contact Services currently Alorica',
      title: 'Technical Support Representative',
      dates: 'April 2013 - January 2015',
      location: 'Exportbank, Makati City',
      summary: 'Provided technical support, troubleshooting, documentation, and user guidance.',
      bullets: [
        'Communicated with users experiencing difficulties to determine and document problems.',
        'Researched and implemented solutions using user guides, technical manuals, and other documents.',
        'Reproduced, diagnosed, and resolved technical problems encountered by users.',
        'Provided support, advice, and training to users.',
        'Collected, organized, and maintained problem and solution logs for other technical support analysts.',
      ],
    },
    {
      company: 'Convergys',
      title: 'Customer / Technical Support Representative',
      dates: 'June 2011 - March 2013',
      location: 'Sta. Rosa, Laguna',
      summary: 'Handled customer service, account, billing, product, and technical support responsibilities.',
      bullets: [
        'Answered customer enquiries and investigated complaints regarding services and policies.',
        'Arranged refunds, exchanges, and credits for returned equipment.',
        'Received account payments and took customer orders for products or services.',
        'Provided technical troubleshooting and maintained problem and solution information.',
      ],
    },
    {
      company: 'TTEC',
      title: 'Customer / Technical Support Representative',
      dates: 'June 2008 - June 2011',
      location: 'San Fernando, Pampanga',
      summary: 'Provided customer and technical support across account, billing, product, and troubleshooting workflows.',
      bullets: [
        'Answered customer enquiries and investigated complaints.',
        'Processed account changes, billing, payments, and product or service orders.',
        'Explained products, services, costs, schedules, rates, regulations, and policies.',
        'Diagnosed and resolved technical problems and provided user advice and training.',
      ],
    },
    {
      company: 'Parlance Systems Inc.',
      title: 'Customer Support Representative',
      dates: 'September 2006 - June 2007',
      location: 'Jupiter St, Makati City',
      summary: 'Provided customer support, account assistance, product information, and service guidance.',
      bullets: [
        'Answered customer enquiries and investigated complaints.',
        'Arranged refunds, exchanges, and credits for returned equipment.',
        'Updated customer accounts and handled payments and orders.',
        'Promoted products and services and explained service information, schedules, rates, and policies.',
      ],
    },
  ],
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/dinanski123', iconPath: '/icons/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/ferdinanddegracia', iconPath: '/icons/linkedin.svg' },
    { label: 'SynthIQ portfolio', href: 'https://synthiq.pages.dev/', iconPath: '/icons/globe.svg' },
  ],
}
