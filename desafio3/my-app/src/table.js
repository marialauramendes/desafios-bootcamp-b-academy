import { url } from "./form"


function Table ({car, cars, setCars}) {

  function handleDelete (event) {
    const plate = event.target.id

    fetch(url, {
      method: 'DELETE', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({plate})
    }).then(response => response.json())
    .then(responseJson => console.log(responseJson))

    setCars((prevState) => prevState.filter((car) => car.plate !== plate));
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
        { cars.length > 0 
        ? cars.map((car) => (
          <tr key={car.plate}>
            <td><img src={car.image} alt={car.brandModel}/></td>
            <td>{car.brandModel}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td><div className="color-box" style={{backgroundColor:car.color}}/></td>
            <td><button id={car.plate} onClick={handleDelete}>Excluir</button></td>
          </tr>
          )
        ) 
        : <tr><td colSpan="5">Nenhum carro cadastrado</td></tr>
        }
      </tbody>

    </table>
  )
}

export { Table }