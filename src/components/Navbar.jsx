import Link from "next/link"

function NavBar() {
  return (
    <ul className="flex justify-center text-2xl border-b-2 border-[#6DC6E3] py-12">
      <li>
        <Link className="navbar-link" href="/">Accueil</Link>
      </li>
      <li>
        <Link className="navbar-link mx-40 " href="/history">Historique</Link>
      </li>
      <li>
        <Link className="navbar-link" href="/command">Commande</Link>
      </li>
  </ul>

  )
}

export default NavBar
