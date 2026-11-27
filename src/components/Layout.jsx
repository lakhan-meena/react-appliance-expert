import { useEffect, useState } from "react"
import { Link, NavLink, Outlet, useLocation } from "react-router-dom"
import { services, site } from "../data"

export default function Layout() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header className="header">
        <div className="bar">
          <Link to="/" className="brand">
            <span className="mark">AE</span>
            <span>
              <strong>Appliance Expert</strong>
              <small>{site.slogan}</small>
            </span>
          </Link>
          <div className="bar-actions">
            <NavLink to="/" className="text-link">Home</NavLink>
            <a className="btn" href={site.phoneTel}>Book Now</a>
          </div>
          <button className="menu-btn" type="button" onClick={() => setOpen((value) => !value)}>
            Menu
          </button>
        </div>
        <nav className="service-nav" aria-label="Services">
          {services.map((service) => (
            <NavLink key={service.slug} to={`/services/${service.slug}`}>
              <img src={service.image} alt="" />
              <span>{service.nav}</span>
            </NavLink>
          ))}
        </nav>
        {open && (
          <div className="mobile-menu">
            <Link to="/">Home</Link>
            {services.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>
                <img src={service.image} alt="" />
                <span>{service.nav}</span>
              </Link>
            ))}
            <a className="btn" href={site.phoneTel}>Book Now</a>
          </div>
        )}
      </header>

      <Outlet />

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <p className="footer-title">Appliance Expert</p>
            <p className="gold">{site.slogan}</p>
            <p>{site.tagline}</p>
            <p><span className="label">Office</span>{site.address}</p>
            <p><a href={site.phoneTel}>{site.phoneDisplay}</a></p>
            <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
          <div>
            <h2>Our Services</h2>
            <ul>
              {services.map((service) => (
                <li key={service.slug}><Link to={`/services/${service.slug}`}>{service.nav}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Location</h2>
            <p>Indore only, with the office in Vijay Nagar.</p>
          </div>
          <div>
            <h2>Quick Links</h2>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/disclaimer">Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        <p className="copy">{site.copyright}</p>
      </footer>

      <div className="dock">
        <a href={site.phoneTel}>Call</a>
        <a href={site.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
      </div>
    </>
  )
}
