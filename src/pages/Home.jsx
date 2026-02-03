import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero hero--split">
        <div className="hero__left">
          <div className="hero-inner">
            <h1>Tidy space. Happy mind.</h1>
            <p>
              Online consultations and in-home organizing for a calmer, more intentional life.
            </p>
            <Link to="/contact" className="button-link">
              Let's Start
            </Link>
          </div>
        </div>
        <div className="hero__right">
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
              alt="Organized, calm space"
            />
          </div>
        </div>
      </section>

      <section className="home-services section">
        <h2 className="section-title">What We Offer</h2>
        <p className="home-services-intro">
          From closets to whole-home systems, we design solutions that feel serene and lasting.
        </p>
        <div className="services-grid">
          <div className="service-card">
            <h3>Closet & wardrobe</h3>
            <p>Edit, categorize, and style your closet so every morning feels effortless.</p>
          </div>
          <div className="service-card">
            <h3>Home organizing</h3>
            <p>Room-by-room systems that keep your space tidy and intentional.</p>
          </div>
          <div className="service-card">
            <h3>Downsizing & moves</h3>
            <p>Thoughtful transitions so you take only what matters to your next chapter.</p>
          </div>
        </div>
        <div className="home-services-cta">
          <Link to="/services" className="button-link button-link--outline">
            View all services
          </Link>
        </div>
      </section>

      <section className="gallery-section">
        <h2 className="gallery-title">Happy Clients' Homes</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <img src="/closet.png" alt="Organized walk-in closet" />
          </div>
          <div className="gallery-item">
            <img src="/closet-kids.png" alt="Organized children's closet" />
          </div>
          <div className="gallery-item">
            <img src="/pantry.png" alt="Organized pantry" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
