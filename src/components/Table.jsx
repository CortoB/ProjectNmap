const Th = (props) => (
  <th
    className="p-2 bg-gray-600 border-r border-[#6DC6E3] text-[#6DC6E3] font-bold"
    {...props}
  />
)

const Table = () => {
    return (
        <table className="w-4/12 mx-auto mt-4">
            <thead>
                <tr>
                    <Th>Commande</Th>
                    <Th>Option</Th>
                </tr>
            </thead>
            <tbody>
              
            </tbody>
        </table>
    )
}
export default Table