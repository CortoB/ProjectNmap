import CommandInput from "@/components/CommandInput"
import Image from "next/image"
import NavBar from "@/components/Navbar"
import { useState } from "react"

const initialValues = {
    commande: "",
    option: ""
}

function Accueil() {
  const [commands, setCommands] = useState([])
  
  const handleSubmit = (newCommands, { resetForm }) => {
    setCommands([...commands, { ...newCommands }])
    resetForm()
  }

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
      <CommandInput/>
    </div>
  )
}

export default Accueil