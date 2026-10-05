import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

type Capability = {
  index: string
  title: string
  detail: string
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'AI & automation', detail: 'AI-assisted tools, workflows, transcription, knowledge systems and practical automation.' },
  { index: '02', title: 'Full-stack web', detail: 'Responsive web apps, PWAs, dashboards, admin tools and polished product interfaces.' },
  { index: '03', title: 'Media & music systems', detail: 'Music platforms, media browsers, streaming workflows, audio tools and video utilities.' },
  { index: '04', title: 'Cloud & operations', detail: 'Cloudflare, Supabase, GitHub and monitoring-oriented systems that are built to ship.' },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I’m {profile.firstName}.</h1>
        <p className="pgrid__lede">I like turning ideas into working products — especially where AI, automation, web technology and media meet.</p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I build digital products that are practical, visual and usable.
            <span> The goal is always to turn an idea into something people can actually use.</span>
          </p>

          <p className="agrid__note">
            My work ranges from <strong>AI-assisted software and automation</strong> to web apps,
            media systems, PWAs and cloud tooling. I enjoy owning the whole path from product idea
            and interface to deployment and ongoing iteration.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  <span className="agrid__mark" style={{ '--i': 1 } as CSSProperties}>
                    <span aria-hidden="true">{c.index}</span>
                  </span>
                </span>
                <span className="agrid__cap-title">
                  <strong>{c.title}</strong>
                  <small>{c.detail}</small>
                </span>
                <span className="agrid__cap-index" aria-hidden="true">{c.index}</span>
              </li>
            ))}
          </ul>

          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Primary working timezone</span>
              </span>
            </span>

            <a className="agrid__cell agrid__cell--wide" href="https://github.com/dinanski123" target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/icons/github.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">GitHub</span>
                <span className="agrid__cell-meta">Projects, experiments and source</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>
    </section>
  )
}
