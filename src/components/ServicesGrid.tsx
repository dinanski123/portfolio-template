import { CheckCircle } from '@/components/slab'

const SERVICES = [
  { title: 'Web & product development', description: 'Build polished, responsive web applications from concept to deployment.', bullets: ['React / TypeScript interfaces', 'PWAs and dashboards', 'Cloudflare and modern hosting'] },
  { title: 'AI-assisted software', description: 'Add useful AI capabilities to products without making the experience feel gimmicky.', bullets: ['AI workflows and agents', 'Transcription and knowledge tools', 'Automation around existing systems'] },
  { title: 'Automation & integrations', description: 'Connect services and remove repetitive manual work from everyday operations.', bullets: ['API integrations', 'Workflow automation', 'Monitoring and operational tooling'] },
  { title: 'Media & music technology', description: 'Build experiences around audio, video, music libraries and streaming workflows.', bullets: ['Music players and media browsers', 'Audio metadata tools', 'Streaming and video utilities'] },
]

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head"><span className="pgrid__eyebrow">Capabilities</span><h1 className="pgrid__title" id="services-title">From idea to working software.</h1><p className="pgrid__lede">I can help shape the product, build the interface, connect the systems, and get the result deployed.</p></header>
      <div className="home__glass sgrid__glass">
        <div className="sgrid__method"><div className="sgrid__method-copy"><span className="sgrid__method-eyebrow">How I work</span><h2 className="sgrid__method-title">Understand. Build. Ship.</h2><p className="sgrid__method-sub">Start with the outcome, build the smallest useful version, then iterate based on what actually works.</p></div>
          <ol className="sgrid__stages" role="list">
            <li className="sgrid__stage"><span className="sgrid__stage-ghost">01</span><h3 className="sgrid__stage-label">Understand.</h3><p className="sgrid__stage-body">Clarify the problem, users, constraints and desired outcome.</p></li>
            <li className="sgrid__stage"><span className="sgrid__stage-ghost">02</span><h3 className="sgrid__stage-label">Build.</h3><p className="sgrid__stage-body">Turn the plan into a working product with a clean, usable interface.</p></li>
            <li className="sgrid__stage"><span className="sgrid__stage-ghost">03</span><h3 className="sgrid__stage-label">Ship.</h3><p className="sgrid__stage-body">Deploy, test, monitor and improve the product as real usage teaches us more.</p></li>
          </ol>
        </div>
        <div className="sgrid__offers"><div className="sgrid__offers-head"><h2 className="sgrid__offers-title">What I can build</h2><p className="sgrid__offers-sub">Choose the problem; the technology follows.</p></div>
          <ul className="bento sgrid__services" role="list">{SERVICES.map((s, i) => <li key={s.title} className="bento__card sgrid__service"><span className="bento__head"><span className="sgrid__service-index" aria-hidden="true">0{i + 1} / 04</span><span className="bento__title">{s.title}</span><span className="bento__desc">{s.description}</span></span><ul className="sgrid__bullets" role="list">{s.bullets.map((b) => <li key={b} className="sgrid__bullet"><CheckCircle size={15} weight="duotone" aria-hidden="true" /><span>{b}</span></li>)}</ul></li>)}</ul>
        </div>
      </div>
    </section>
  )
}
