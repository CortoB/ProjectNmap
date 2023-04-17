
function CommandInput() {
    return (
        <div className="p-16 rounded-lg border-2 border-[#6DC6E3] max-w-max mx-auto ">
            <form className="flex flex-col justify-center ">
                <div className="text-[#6DC6E3]">
                    Votre commande :
                    <input className="commandinput-input placeholder-[#6DC6E3]" placeholder="Commande" type="text" name="name" />
                </div>
                <div className="text-[#6DC6E3] mt-2">
                    Options :
                    <input className="commandinput-input placeholder-[#6DC6E3]" placeholder="Options" type="option" name="name" />
                </div>
                <button className="mx-auto mt-2 p-1 text-[#6DC6E3] bg-gray-600 hover:font-bold hover:bg-gray-500 active:bg-gray-700 px-2 rounded-lg" type="submit" value="Envoyer" >
                    Envoyer
                </button>
            </form>
        </div>
        )
}

export default CommandInput