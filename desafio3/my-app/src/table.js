import { url } from "./form"

function Table ({car, cars, setCars}) {

  function handleDelete (event) {
    const plate = event.target.id
    console.log(plate)
    
    const result = fetch(url, {
      method: 'DELETE', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({plate})
    })

    if(result.error){
      console.log('erro ao deletar', result.message)
      return
    }
    setCars((prevData) => {
      return [...prevData, car]
    })
  }

  return (
    <table>
      <thead>
        <tr>
        <th>Imagem</th>
        <th>Marca/ Modelo</th>
        <th>Ano</th>
        <th>Placa</th>
        <th>Cor</th>
        </tr>
      </thead>

      <tbody>
        {cars.map((car) => (
          <tr key={car.plate}>
            <td><img src={car.image} alt={car.brandModel}/></td>
            <td>{car.brandModel}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td><div className="color-box" style={{backgroundColor:car.color}}/></td>
            <td><button id={car.plate} onClick={handleDelete}>Excluir</button></td>
          </tr>
        ))}
      </tbody>

    </table>
  )
}

export { Table }