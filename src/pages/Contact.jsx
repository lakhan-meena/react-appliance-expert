import { Link } from "react-router-dom"
import { useEffect } from "react"
import { services, site } from "../data"

export default function Contact() {
  useEffect(() => {
    document.title = "Contact Us | Appliance Expert"
  }, [])

  return (
    <>
      <section className="wrap block">
        <p className="crumb"><Link to="/">Home</Link> / Contact Us</p>
        <h1>Contact Us</h1>
        <p className="lead">Call, WhatsApp, or email the Vijay Nagar desk. Visits are inside Indore.</p>
      </section>
      <section className="wrap contact-grid">
        <div>
          <p className="kicker">We are here to help</p>
          <h2>Book a service or ask a question</h2>
          <p>Tell us the appliance and the fault. A call or WhatsApp is the fastest way to book a visit in Indore.</p>
        </div>
        <div className="stack">
          <article>
            <p className="label">Call us</p>
            <a href={site.phoneTel}>{site.phoneDisplay}</a>
          </article>
          <article>
            <p className="label">WhatsApp us</p>
            <p>Send your appliance details</p>
            <a href={site.whatsapp} target="_blank" rel="noreferrer">Open WhatsApp</a>
          </article>
          <article>
            <p className="label">Email</p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </article>
          <article>
            <p className="label">Office</p>
            <p>{site.address}</p>
          </article>
        </div>
      </section>
      <section className="wrap split">
        <div>
          <h2>How can we help?</h2>
          <ul>
            {services.map((service) => (
              <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.nav}</Link></li>
            ))}
          </ul>
        </div>
        <aside className="desk">
          <h2>Where we visit</h2>
          <p>Indore only. The office sits in Vijay Nagar, and technicians go out across the city from there.</p>
          <p className="gold">{site.hours}</p>
        </aside>
      </section>
    </>
  )
}
