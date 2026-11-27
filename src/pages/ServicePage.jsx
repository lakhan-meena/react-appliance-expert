import { Link, useParams } from "react-router-dom"
import { useEffect } from "react"
import Reviews from "../components/Reviews"
import { findService, site } from "../data"

export default function ServicePage() {
  const { slug } = useParams()
  const service = findService(slug)

  useEffect(() => {
    document.title = service ? `${service.name} | Appliance Expert` : "Not found | Appliance Expert"
  }, [service])

  if (!service) {
    return (
      <section className="wrap block">
        <h1>Service not found</h1>
        <Link to="/">Back home</Link>
      </section>
    )
  }

  return (
    <>
      <section className="wrap service-hero">
        <div>
          <p className="crumb"><Link to="/">Home</Link> / {service.name}</p>
          <h1>{service.name}</h1>
          <p className="lead">{service.blurb} {site.hours}.</p>
        </div>
        <img src={service.image} alt={service.name} />
      </section>
      <section className="wrap block">
        <div className="cards services">
          {service.offerings.map((offering) => (
            <article key={offering.name}>
              <img src={offering.image} alt={offering.name} />
              <div>
                <h2>{offering.name}</h2>
                <p>{offering.summary}</p>
                <ul className="tags">{offering.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
                <a className="btn" href={site.phoneTel}>Call For Service</a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <Reviews kicker={service.reviewKicker} title={service.reviewTitle} reviews={service.reviews} />
    </>
  )
}
