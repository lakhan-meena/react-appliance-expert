import { Link } from "react-router-dom"
import Reviews from "../components/Reviews"
import { services, site } from "../data"
import { useEffect } from "react"

export default function Home() {
  useEffect(() => {
    document.title = "Appliance Expert | Indore Appliance Repair"
  }, [])

  return (
    <>
      <section className="hero wrap">
        <div>
          <p className="kicker">{site.slogan}</p>
          <h1>Home appliance repair in Indore</h1>
          <p className="lead">{site.tagline}</p>
          <div className="actions">
            <a className="btn" href={site.phoneTel}>Book Now</a>
            <a className="btn ghost" href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
        <aside className="desk">
          <p className="label">Vijay Nagar desk</p>
          <p className="hours">{site.hours}</p>
          <p>Visits across {site.city} only. Call {site.phoneDisplay} or write to {site.email}.</p>
        </aside>
      </section>

      <section className="wrap block">
        <h2>Our Services</h2>
        <div className="cards services">
          {services.map((service) => (
            <article key={service.slug}>
              <img src={service.image} alt={service.name} />
              <div>
                <h3>{service.name}</h3>
                <p>{service.blurb}</p>
                <div className="actions">
                  <Link to={`/services/${service.slug}`}>View</Link>
                  <a className="btn dark" href={site.phoneTel}>Call For Service</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="wrap">
          <p className="kicker light">Why us</p>
          <h2>Why Choose Appliance Expert?</h2>
          <p>{site.whyIntro}</p>
          <div className="reason-grid">
            {site.reasons.map((reason, index) => (
              <article key={reason.title}>
                <p>{String(index + 1).padStart(2, "0")}</p>
                <h3>{reason.title}</h3>
                <p>{reason.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="wrap about">
        <div>
          <p className="kicker">About Appliance Expert</p>
          <h2>A Vijay Nagar desk that visits your home</h2>
          <ul>
            {site.aboutPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
        <div className="stats">
          {site.stats.map((stat) => (
            <article key={stat.value}>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </section>

      <Reviews
        kicker="Ratings and reviews"
        title="What Indore homes say"
        reviews={site.homeReviews}
        summary={site.rating}
      />
    </>
  )
}
