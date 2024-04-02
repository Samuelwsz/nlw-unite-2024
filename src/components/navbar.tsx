import Logo from "../assets/Logo.svg"
import { NavLink } from "./nav-link"

export function NavBar() {
  return (
    <div className="flex items-center gap-5">
      <img src={Logo} />

      <nav className="flex items-center gap-5">
        <NavLink href="/eventos">Eventos</NavLink>
        <NavLink href="/participantes">Participantes</NavLink>
      </nav>
    </div>
  )
}
