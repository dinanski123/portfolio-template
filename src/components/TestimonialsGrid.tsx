export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head"><span className="pgrid__eyebrow">Notes</span><h1 className="pgrid__title" id="testimonials-title">Proof through the work.</h1><p className="pgrid__lede">I’m keeping this section honest: no invented client testimonials. The project archive is the proof available publicly right now.</p></header>
      <div className="home__glass tgrid__glass"><div className="tgrid__ledger"><div className="tgrid__ledger-head"><h2 className="tgrid__ledger-title">What the portfolio demonstrates</h2><p className="tgrid__ledger-sub">A cross-section of the systems and products I have been building.</p></div>
        <ul className="tgrid__clients" role="list">
          <li className="tgrid__client"><span className="tgrid__client-ghost">01</span><span className="tgrid__client-body"><span className="tgrid__client-name">Product development</span><span className="tgrid__client-daily">Interfaces, PWAs, dashboards and end-to-end web applications.</span></span></li>
          <li className="tgrid__client"><span className="tgrid__client-ghost">02</span><span className="tgrid__client-body"><span className="tgrid__client-name">AI & automation</span><span className="tgrid__client-daily">AI-assisted utilities, transcription, knowledge workflows and automation.</span></span></li>
          <li className="tgrid__client"><span className="tgrid__client-ghost">03</span><span className="tgrid__client-body"><span className="tgrid__client-name">Media & music</span><span className="tgrid__client-daily">Music platforms, audio tools, media browsers and streaming infrastructure.</span></span></li>
        </ul>
      </div></div>
    </section>
  )
}
