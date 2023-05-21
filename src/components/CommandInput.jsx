import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"

function CommandInput() {
    const router = useRouter()
    const [selectedOption, setSelectedOption] = useState("")
    const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData(event.target)
        const command = formData.get("command")
        const scanoption = formData.get("scanoption")
        const opt = formData.get("opt")
        const numopt = formData.get("numopt") || ""
        const address = formData.get("address")


        try {
            await axios.post("http://localhost:3005/command", { command, scanoption, opt, numopt, address })
            console.log("Formulaire soumis avec succès")
            router.push("/command")
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire", error)
        }
            }
    
    return (
        <div className="p-16 rounded-lg border-2 border-[#6DC6E3] max-w-max mx-auto ">
            <form className="flex flex-col justify-center " onSubmit={handleSubmit}>
                <div className="text-[#6DC6E3]">
                    Votre commande :
                    <select className="commandinput-input placeholder-[#6DC6E3]" name="command">
                        <option value="">Choisir une commande</option>
                        <option value="nmap">Nmap</option>
                    </select>
                </div>
                <div className="text-[#6DC6E3] mt-2">
                    Address
                    <input className="commandinput-input placeholder-[#6DC6E3]" name="address"/>
                </div>
                <div className="text-[#6DC6E3] mt-2">
                    Scan Option :
                    <select className="commandinput-input placeholder-[#6DC6E3]" name="scanoption">
                        <option value="">Aucune options de scan sélectionnées</option>
                        <option value="-sV">-sV</option>
                    </select>
                </div>
                <div className="text-[#6DC6E3] mt-2">
                    Option :
                    <select className="commandinput-input placeholder-[#6DC6E3]" name="opt" onChange={handleOptionChange}>
                        <option value="">Aucune options sélectionnées</option>
                        <option value="--max-retries">--max-retries</option>
                        <option value="--min-rate">--min-rate</option>
                        <option value="--max-rate">--max-rate</option>
                    </select>
                </div>
                {selectedOption === "--max-retries" && (
                    <div className="text-[#6DC6E3] mt-2">
                        Nombre de tentatives :
                        <input
                        className="commandinput-input placeholder-[#6DC6E3]"
                        type="number"
                        name="numopt"
                        />
                    </div>
                )}
                {selectedOption === "--min-rate" && (
                    <div className="text-[#6DC6E3] mt-2">
                        Minimum :
                        <input
                        className="commandinput-input placeholder-[#6DC6E3]"
                        type="number"
                        name="numopt"
                        />
                    </div>
                )}
                {selectedOption === "--max-rate" && (
                    <div className="text-[#6DC6E3] mt-2">
                        Maximum :
                        <input
                        className="commandinput-input placeholder-[#6DC6E3]"
                        type="number"
                        name="numopt"
                        />
                    </div>
                )}
                <button className="mx-auto mt-2 p-1 text-[#6DC6E3] bg-gray-600 hover:font-bold hover:bg-gray-500 active:bg-gray-700 px-2 rounded-lg" type="submit" value="Envoyer" >
                    Envoyer
                </button>
            </form>
        </div>
        )
}
export default CommandInput