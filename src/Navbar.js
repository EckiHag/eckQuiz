import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  console.log("Navbar")
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Quiz SuS Gymnasium Porta
      </Link>
      <ul>
        <CustomLink to="/thesomat">Thesomat</CustomLink>
        <CustomLink to="/provakomat">Provakomat</CustomLink>
        <CustomLink to="/objectquiz">Objectquiz</CustomLink>
        <CustomLink to="/objectquiz/klasse5Verschiedene">Jg5</CustomLink>
        <CustomLink to="/objectquiz/klasse7Verschiedene">Jg7</CustomLink>
        <CustomLink to="/objectquiz/klasse9Verschiedene">Jg9</CustomLink>
        <CustomLink to="/objectquiz/klasse11Q1Verschiedene">Q1</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
