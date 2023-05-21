import axios from "axios"
import { useEffect, useState } from "react"

function ResultCommand() {
    const [com, setCom] = useState("")

  useEffect(() => {
    fetchCommandResult()
  })

  const fetchCommandResult = async () => {
      try {
          const response = await axios.get("http://localhost:3005/lastcommand")
          const lastCom = response.data
          setCom(lastCom.result)
        } catch (error) {
      console.error("Erreur lors de la récupération des formulaires", error)
    }
  }

    return (
        <div>
            <h1 className="flex justify-center text-[#6DC6E3]">Your Last Command</h1>
            <div className="flex justify-center text-[#6DC6E3] mt-6">
                <pre>{com}</pre>
            </div>
        </div>
    )
}

export default ResultCommand