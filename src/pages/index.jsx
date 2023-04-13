import CommandInput from "@/components/CommandInput"
import Image from "next/image"
import NavBar from "@/components/Navbar"

function Accueil() {
  return (
    <div>
      <NavBar />
      <Image
        className="flex justify-center m-auto"
        src="/nmap_logo.png"
        alt="logo nmap"
        width={350}
        height={200}
      />
      <CommandInput />
    </div>
  )
}

export default Accueil