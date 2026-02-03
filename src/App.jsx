import { Routes, Route, Link } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <Link to="/" className="logo-block">
            <img src="/logo.png" alt="Prestige Organizing" className="logo-img" />
          </Link>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li title="Follow us on Instagram">
              <SocialIcon
                url="https://instagram.com"
                network="instagram"
                bgColor="transparent"
                fgColor="#1a1a1a"
                className="nav-social-icon"
              />
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <p className="footer-copy">© Prestige Organizing. All rights reserved.</p>
          <span title="Follow us on Instagram">
            <SocialIcon
              url="https://instagram.com"
              network="instagram"
              bgColor="transparent"
              fgColor="#1a1a1a"
              className="footer-social-icon"
              aria-label="Follow us on Instagram"
            />
          </span>
        </div>
      </footer>
    </div>
  )
}

export default App
