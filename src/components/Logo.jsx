import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Link to="/" className="logo-block" aria-label="Prestige Organizing – Home">
      <span className="logo-script">Prestige</span>
      <span className="logo-organizing">Organizing</span>
      <svg
        className="logo-heart"
        viewBox="0 0 120 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M8 20 Q60 0 112 20"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M56 14 Q60 8 64 14 Q60 20 56 14"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </Link>
  )
}

export default Logo
