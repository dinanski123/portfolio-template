import { ArrowUpRight, MusicNote } from '@/components/slab'

export default function ShowcaseGrid() {
  return (
    <section className="pgrid ktools" aria-labelledby="showcase-title">
      <header className="pgrid__head ktools__head"><div className="ktools__head-copy"><span className="pgrid__eyebrow">Showcase</span><h1 className="pgrid__title" id="showcase-title">SynthIQ Music — a real product example.</h1><p className="pgrid__lede">A live music experience that brings together playback, media discovery and the wider SynthIQ ecosystem.</p></div></header>
      <div className="home__glass ktools__glass"><div className="bento bento--projects">
        <a className="bento__card bento__card--project" href="https://synthiq-music.vercel.app/" target="_blank" rel="noopener noreferrer"><span className="bento__logos"><span className="bento__logo"><MusicNote size={22} weight="duotone" /></span></span><span className="bento__title">SynthIQ Music</span><span className="bento__desc">Live music player and product experience.</span><span className="bento__project-link">Open live project <ArrowUpRight size={15} weight="bold" /></span></a>
        <a className="bento__card bento__card--project" href="https://synthiq.pages.dev/" target="_blank" rel="noopener noreferrer"><span className="bento__title">SynthIQ Web</span><span className="bento__desc">The wider web experience around the SynthIQ projects.</span><span className="bento__project-link">Open live project <ArrowUpRight size={15} weight="bold" /></span></a>
      </div></div>
    </section>
  )
}
