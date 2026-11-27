import { Link } from "react-router-dom"
import { useEffect } from "react"
import { pages } from "../data"

export default function Legal({ pageKey }) {
  const page = pages[pageKey]

  useEffect(() => {
    document.title = `${page.title} | Appliance Expert`
  }, [page.title])

  return (
    <>
      <section className="wrap block narrow">
        <p className="crumb"><Link to="/">Home</Link> / {page.title}</p>
        <h1>{page.title}</h1>
        <p className="lead">{page.summary}</p>
        <p className="kicker">Last updated: {page.updated}</p>
      </section>
      <article className="wrap legal">
        <p className="lead">{page.intro}</p>
        {page.sections.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>
        ))}
      </article>
    </>
  )
}
