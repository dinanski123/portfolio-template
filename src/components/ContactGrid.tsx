import { useState, type FormEvent } from 'react'
import { PaperPlaneTilt, CheckCircle, WarningCircle, ArrowUpRight, CaretDown } from '@/components/slab'
import { FAQS } from '@/data/faqs'
import { profile } from '@/data/profile'
import { readLead, submitLead, SubmitError, MAX_NAME, MAX_EMAIL, MAX_MESSAGE, type SubmitResult } from '@/lib/contact'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'error'; note: string } | { kind: 'sent'; via: SubmitResult['via'] }
const FLIGHT_MS = 650
const wait = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

export default function ContactGrid() {
  const [status, setStatus] = useState<Status>({ kind: 'idle' })
  const [shake, setShake] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const lead = readLead(new FormData(e.currentTarget))
    if (!lead) {
      setStatus({ kind: 'error', note: 'Add your name, a valid email, and a short note.' })
      setShake((n) => n + 1)
      return
    }
    setStatus({ kind: 'sending' })
    try {
      const [result] = await Promise.all([submitLead(lead), wait(FLIGHT_MS)])
      setStatus({ kind: 'sent', via: result.via })
    } catch (err) {
      const note = err instanceof SubmitError ? err.message : 'That did not go through. Connect with me on LinkedIn instead.'
      setStatus({ kind: 'error', note })
      setShake((n) => n + 1)
    }
  }

  const busy = status.kind === 'sending'
  const linkedin = profile.socials.find((s) => s.label.toLowerCase().includes('linkedin'))

  return (
    <section className="pgrid cgrid" aria-labelledby="contact-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">FAQs / Contact</span>
        <h1 className="pgrid__title" id="contact-title">Let’s build something useful.</h1>
        <p className="pgrid__lede">Tell me what you are building, what is already in place, and what you want the finished product to do.</p>
      </header>

      <div className="home__glass cgrid__glass">
        <aside className="cgrid__aside" aria-labelledby="contact-faq">
          <div className="cgrid__aside-head">
            <span className="cgrid__eyebrow">FAQs</span>
            <h2 className="cgrid__aside-title" id="contact-faq">
              Quick answers.
              <br />
              <span>Still have one? Write below.</span>
            </h2>
          </div>

          <ul className="cgrid__faqs" role="list">
            {FAQS.map((f, i) => {
              const isOpen = openFaq === i
              return (
                <li key={f.q} className={`cgrid__faq${isOpen ? ' is-open' : ''}`}>
                  <button type="button" className="cgrid__faq-q" onClick={() => setOpenFaq(isOpen ? null : i)} aria-expanded={isOpen} aria-controls={`cfaq-${i}`}>
                    <span className="cgrid__step-index" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                    <span className="cgrid__faq-text">{f.q}</span>
                    <CaretDown size={14} weight="bold" className="cgrid__faq-caret" aria-hidden="true" />
                  </button>
                  <div className="cgrid__faq-a" id={`cfaq-${i}`} hidden={!isOpen}><p>{f.a}</p></div>
                </li>
              )
            })}
          </ul>

          <div className="cgrid__direct">
            {linkedin ? (
              <a className="cgrid__mail" href={linkedin.href} target="_blank" rel="noopener noreferrer">
                <img src="/icons/linkedin.svg" alt="" width="16" height="16" />
                <span>Connect with me on LinkedIn</span>
              </a>
            ) : null}
          </div>
        </aside>

        <div className="cgrid__panel">
          {status.kind === 'sent' ? (
            <div className="cgrid__done" role="status">
              <span className="cgrid__done-mark" aria-hidden="true"><CheckCircle size={30} weight="fill" /></span>
              <h2 className="cgrid__done-title">{status.via === 'webhook' ? 'Got it.' : 'Your mail app has it.'}</h2>
              <p className="cgrid__done-body">{status.via === 'webhook' ? 'Your inquiry is in the connected inbox.' : 'The message is addressed and ready to send. You should hear back after it is sent.'}</p>
              <button type="button" className="cgrid__again" onClick={() => setStatus({ kind: 'idle' })}>Write another</button>
            </div>
          ) : (
            <form className={`cgrid__form${busy ? ' is-sending' : ''}`} onSubmit={onSubmit} noValidate>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="cgrid__trap" />
              <div className="cgrid__row">
                <label className="cgrid__field"><span className="cgrid__label">First name</span><input type="text" name="firstName" autoComplete="given-name" required maxLength={MAX_NAME} placeholder="First name" /></label>
                <label className="cgrid__field"><span className="cgrid__label">Last name</span><input type="text" name="lastName" autoComplete="family-name" required maxLength={MAX_NAME} placeholder="Last name" /></label>
              </div>
              <label className="cgrid__field"><span className="cgrid__label">Email</span><input type="email" name="email" autoComplete="email" required maxLength={MAX_EMAIL} placeholder="you@yourbusiness.com" /></label>
              <label className="cgrid__field cgrid__field--grow"><span className="cgrid__label">Tell me about the project</span><textarea name="message" required maxLength={MAX_MESSAGE} placeholder="What are you trying to build? What do you need help with?" /></label>
              <div className="cgrid__actions">
                <button key={shake} type="submit" className={`cgrid__submit${busy ? ' is-sending' : ''}${status.kind === 'error' ? ' is-shaking' : ''}`} disabled={busy}>
                  <span className="cgrid__submit-plane" aria-hidden="true"><PaperPlaneTilt size={17} weight="fill" /></span>
                  <span className="cgrid__submit-label">{busy ? 'Sending' : 'Send inquiry'}</span>
                  <ArrowUpRight className="cgrid__submit-arrow" size={15} weight="bold" aria-hidden="true" />
                </button>
                {status.kind === 'error' ? <span className="cgrid__status" role="alert"><WarningCircle size={16} weight="fill" aria-hidden="true" />{status.note}</span> : <span className="cgrid__hint">Connect an email address or webhook in staging before publishing.</span>}
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
