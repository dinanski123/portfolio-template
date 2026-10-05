import { useMemo, useState } from 'react'
import { ArrowUpRight, CursorClick, GithubLogo, LockKey, Globe } from '@/components/slab'
import { portfolioProjects, type PortfolioProject } from '@/data/portfolio'

const FILTERS = ['All', 'Web', 'AI', 'Music', 'PWA', 'Tools', 'Infrastructure'] as const

function ProjectCard({ project }: { project: PortfolioProject }) {
  const href = project.live ?? project.repo

  return (
    <article className="bento__card bento__card--project">
      <div className="bento__head">
        <span className="bento__logos" aria-hidden="true">
          <span className="bento__logo">
            {project.live ? <Globe size={20} weight="duotone" /> : project.repo ? <GithubLogo size={20} weight="duotone" /> : <LockKey size={20} weight="duotone" />}
          </span>
        </span>
        <span className="bento__title">{project.name}</span>
        <span className="bento__desc">{project.description}</span>
        <span className="bento__desc" style={{ opacity: 0.72 }}>
          {project.visibility === 'Private' ? 'Private build' : project.category} · {project.tech.join(' · ')}
        </span>
      </div>
      {href ? (
        <a
          className="bento__project-link"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${project.name}`}
        >
          {project.live ? 'View live project' : 'View repository'}
          <ArrowUpRight size={15} weight="bold" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  )
}

export default function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('All')
  const projects = useMemo(
    () => filter === 'All' ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">Things I’ve built.</h1>
        <p className="pgrid__lede">
          Web apps, AI tools, media systems, PWAs and experiments — including public work and private builds.
        </p>
      </header>

      <div className="pfilter" role="group" aria-label="Filter projects">
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            className="pfilter__btn"
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="home__glass pgrid__glass">
        <span className="pgrid__hint" aria-hidden="true">
          <CursorClick size={14} weight="duotone" />
          {projects.length} projects
        </span>
        <div className="bento bento--projects">
          {projects.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      </div>
    </section>
  )
}
