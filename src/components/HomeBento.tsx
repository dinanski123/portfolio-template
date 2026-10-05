import { Link } from 'react-router-dom'
import { ArrowUpRight, FolderOpen, User, Robot, Stack, MusicNote, EnvelopeSimple } from '@/components/slab'
import { profile } from '@/data/profile'

const CARDS = [
  { to: '/projects', Icon: FolderOpen, title: 'Projects', desc: 'Web apps, AI tools, music products, PWAs and cloud systems.' },
  { to: '/about', Icon: User, title: 'About', desc: 'How I work and the kinds of systems I like to build.' },
  { to: '/projects', Icon: Robot, title: 'AI & Automation', desc: 'Practical AI, transcription, knowledge workflows and automation.' },
  { to: '/services', Icon: Stack, title: 'Capabilities', desc: 'Product development from interface through deployment.' },
  { to: '/showcase', Icon: MusicNote, title: 'SynthIQ Music', desc: 'A live example of the music and media products I build.' },
  { to: '/contact', Icon: EnvelopeSimple, title: 'Contact', desc: 'Have an idea? Send the project details and start a conversation.' },
]

export default function HomeBento() {
  return (
    <nav className="bento" aria-label="Explore the portfolio">
      {CARDS.map(({ to, Icon, title, desc }) => (
        <Link key={to + title} to={to} className="bento__card">
          <header className="bento__head">
            <span className="bento__label"><span className="bento__icon"><Icon size={20} weight="fill" aria-hidden="true" /></span><h3 className="bento__title">{title}</h3></span>
            <p className="bento__desc">{desc}</p>
            <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
          </header>
        </Link>
      ))}
      <div className="bento__card bento__card--about"><div className="bento__media bento__fan" aria-hidden="true"><span className="bento__photo"><img src={profile.avatarSrc} alt="" loading="lazy" decoding="async" /></span></div></div>
    </nav>
  )
}
