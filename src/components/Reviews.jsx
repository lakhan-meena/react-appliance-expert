import { site } from "../data"

function Stars({ count }) {
  return (
    <p className="stars" aria-label={`${count} out of 5`}>
      {"★".repeat(count)}
      <span>{"★".repeat(5 - count)}</span>
      <b>{count}.0</b>
    </p>
  )
}

export default function Reviews({ kicker, title, reviews, summary }) {
  return (
    <section className="panel">
      <div className="wrap">
        <div className="review-head">
          <div>
            <p className="kicker">{kicker}</p>
            <h2>{title}</h2>
          </div>
          {summary && (
            <div className="score">
              <p>{summary.score}<span> / 5</span></p>
              <p className="gold-stars">★★★★★</p>
              <small>{summary.label}</small>
            </div>
          )}
        </div>
        <div className="cards three">
          {reviews.map((review) => (
            <figure key={review.name + review.area}>
              <Stars count={review.stars} />
              <blockquote>“{review.quote}”</blockquote>
              <figcaption>{review.name} · {review.area}</figcaption>
            </figure>
          ))}
        </div>
        <a className="btn ghost" href={site.phoneTel}>Call For Service</a>
      </div>
    </section>
  )
}
