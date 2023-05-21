import React, { useState, useEffect } from "react"
import axios from "axios"

const Th = (props) => (
  <th
    className="p-2 bg-gray-600 border border-[#6DC6E3] text-[#6DC6E3] font-bold"
    {...props}
  />
)
const Td = (props) => (
  <th
    className="p-2 bg-gray-600 border border-[#6DC6E3] text-[#6DC6E3] font-normal"
    {...props}
  />
)

const Table = () => {
  const [forms, setForms] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/commands")
      setForms(response.data)
    } catch (error) {
      console.error("Erreur lors de la récupération des formulaires", error)
    }
  }
    
  const handleDelete = async (commandId) => {
    try {
      await axios.delete(`http://localhost:3005/command/${commandId}`)
      fetchData()
    } catch (error) {
      console.error("Erreur lors de la suppression du formulaire", error)
    }
  }


  return (
    <table className="w-4/12 mx-auto mt-12">
      <thead>
        <tr>
          <Th>Commande</Th>
          <Th>Scan Option</Th>
          <Th>Option</Th>
          <Th>Num</Th>
          <Th>Address</Th>
        </tr>
      </thead>
      <tbody>
        {forms.map((form) => (
          <tr key={form._id}>
            <Td>{form.command}</Td>
            <Td>{form.scanoption}</Td>
            <Td>{form.opt}</Td>
            <Td>{form.numopt}</Td>
            <Td>{form.address}</Td>
            <td >
                <button className="text-[#6DC6E3] bg-red-700 hover:bg-red-500 hover:font-bold active:bg-red-900  p-2" onClick={() => handleDelete(form._id)}>Supprimer</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
