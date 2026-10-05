import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin, GraduationCap, Certificate } from '@/components/slab'
import { profile } from '@/data/profile'

type Capability = {
  index: string
  title: string
  detail: string
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'AI-assisted product development', detail: 'Research, prototyping, coding, debugging, testing, documentation and iteration using AI-assisted development workflows.' },
  { index: '02', title: 'Web & mobile applications', detail: 'Standalone applications, portfolio experiences, administrative tools, database-backed workflows and mobile-ready products.' },
  { index: '03', title: 'Workflow & business process automation', detail: 'Automation and process improvement focused on making repetitive digital work more efficient.' },
  { index: '04', title: 'UI/UX & rapid prototyping', detail: 'User-focused interface design, rapid prototyping, product branding and consistent visual identity.' },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">Hi, I’m {profile.firstName}.</h1>
        <p className="pgrid__lede">{profile.hero.body}</p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">{profile.summary}</p>

          <p className="agrid__note">
            Through <strong>SynthIQ</strong>, I design, build, test, deploy, and continuously improve
            web and mobile experiences while exploring practical ways AI can support and accelerate modern product development.
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
              <span className="agrid__cell-mark"><MapPin size={16} weight="fill" aria-hidden="true" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">Based on the supplied profile</span>
              </span>
            </span>
            <a className="agrid__cell agrid__cell--wide" href="https://www.linkedin.com/in/ferdinanddegracia" target="_blank" rel="noopener noreferrer">
              <span className="agrid__cell-mark agrid__cell-mark--plain"><img src="/icons/linkedin.svg" alt="" loading="lazy" decoding="async" /></span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">LinkedIn</span>
                <span className="agrid__cell-meta">Professional profile</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="agrid__portrait">
          <img src={profile.hero.portraitSrc} alt={profile.hero.portraitAlt} loading="eager" decoding="async" width={400} height={400} />
        </div>
      </div>

      <div className="home__glass agrid__details">
        <div className="agrid__details-head">
          <span className="pgrid__eyebrow">Professional background</span>
          <h2 className="agrid__details-title">Experience, skills & education.</h2>
        </div>

        <div className="agrid__timeline">
          {profile.experience.map((job) => (
            <article key={job.company + job.title} className="agrid__job">
              <div className="agrid__job-top">
                <div>
                  <h3>{job.title}</h3>
                  <strong>{job.company}</strong>
                </div>
                <span>{job.dates}</span>
              </div>
              {job.location ? <small className="agrid__job-location">{job.location}</small> : null}
              <p>{job.summary}</p>
              <ul>
                {job.bullets.slice(0, 6).map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className="agrid__credentials">
          <div className="agrid__credential">
            <GraduationCap size={20} weight="duotone" aria-hidden="true" />
            <div><strong>{profile.education.school}</strong><span>{profile.education.degree} · {profile.education.dates}</span></div>
          </div>
          <div className="agrid__credential">
            <Certificate size={20} weight="duotone" aria-hidden="true" />
            <div><strong>Certification</strong><span>{profile.certification}</span></div>
          </div>
          <div className="agrid__credential">
            <SparkleIcon />
            <div><strong>Top skills</strong><span>{profile.skills.join(' · ')}</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SparkleIcon() {
  return <span aria-hidden="true" style={{ fontSize: 18 }}>✦</span>
}
