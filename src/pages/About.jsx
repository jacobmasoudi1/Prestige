import { Link } from 'react-router-dom'

function About() {
  return (
    <section className="page page--centered">
      <div className="section section--about">
        <h1>Organized Spaces, Elevated Living.</h1>
        <p className="lead">
          Thoughtful, stress-free organizing tailored to your lifestyle—so your home feels calm and effortless.
        </p>

        <h2 className="about-heading">About Prestige Organizing</h2>
        <p>
          Prestige Organizing creates calm, functional, and beautifully organized spaces designed to support everyday living.
        </p>
        <p>
          We believe organization should feel effortless—not overwhelming. Every project is tailored to each client's lifestyle, combining practical systems with clean, elevated aesthetics that are easy to maintain.
        </p>
        <p>
          Serving Los Angeles and Orange County, our goal is simple: to help clients enjoy homes that feel peaceful, intentional, and truly work for them.
        </p>
        <Link to="/contact" className="button-link button-link--outline">
          Get in Touch
        </Link>
      </div>

      <div className="testimonials-section">
        <h2 className="testimonials-title">What Clients Say</h2>
        <div className="testimonials-grid">
          <blockquote className="testimonial-card">
            <p className="testimonial-text">"My home finally feels like a sanctuary. Prestige transformed our chaos into calm—I couldn't be happier."</p>
            <cite className="testimonial-cite">— Client, Los Angeles</cite>
          </blockquote>
          <blockquote className="testimonial-card">
            <p className="testimonial-text">"Professional, kind, and incredibly organized. The systems they put in place actually work for our family."</p>
            <cite className="testimonial-cite">— Client, Orange County</cite>
          </blockquote>
          <blockquote className="testimonial-card">
            <p className="testimonial-text">"Worth every penny. Our closet and pantry have never looked better—and we've kept it that way."</p>
            <cite className="testimonial-cite">— Client, LA</cite>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default About
