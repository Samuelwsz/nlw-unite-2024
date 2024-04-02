import Logo from "../assets/Logo.svg"

export function NavBar() {
  return (
    <div className="flex items-center gap-5">
      <img src={Logo} />

      <nav className="flex items-center gap-5">
        <a href="" className="font-medium text-sm text-zinc-300">
          Eventos
        </a>
        <a href="" className="font-medium text-sm">
          Participantes
        </a>
      </nav>
    </div>
  )
}
