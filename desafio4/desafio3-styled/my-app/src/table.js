import styled from "styled-components";
import { url } from "./form"


function Table ({ cars, setCars, setToast}) {

  function handleDelete (event) {
    const plate = event.target.id

    fetch(url, {
      method: 'DELETE', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({plate})
    }).then(response => response.json())
    .then(responseJson => setToast({content: responseJson.message, show: true}))

    setTimeout(() => {
      setToast({content: '', show: false})
    }, 3000)
    
    setCars((prevState) => prevState.filter((car) => car.plate !== plate));
    
  }

  return (
    <TableContainer>
      <thead>
        <TableHeadRow>
        <TableHeader>Imagem (Url)</TableHeader>
        <TableHeader>Marca e Modelo</TableHeader>
        <TableHeader>Ano</TableHeader>
        <TableHeader>Placa</TableHeader>
        <TableHeader>Cor</TableHeader>
        <TableHeader/>
        </TableHeadRow>
      </thead>

      <tbody>
        { cars.length > 0 
        ? cars.map((car) => (
          <TableBodyRow key={car.plate}>
            <td><CarImage src={car.image} alt={car.brandModel}/></td>
            <td>{car.brandModel}</td>
            <td>{car.year}</td>
            <td>{car.plate}</td>
            <td><ColorBox bgColor={car.color}/></td>
            <td><DeleteCarButton id={car.plate} onClick={handleDelete}>Excluir</DeleteCarButton></td>
          </TableBodyRow>
          )
        ) 
        : <TableBodyRow><td colSpan="5">Nenhum carro cadastrado</td></TableBodyRow>
        }
      </tbody>

    </TableContainer>
  )
}

const TableContainer = styled.table`
  width:65%;
  min-height:350px;
  background-color: #2B2C42;
  border: 1px solid #5E47F9;
  box-sizing: border-box;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  border-spacing: 0px;
  overflow:hidden;
`


const TableHeadRow = styled.tr`
  width:100%;
  height: 60px;
  background: #202136;
  border-bottom: 1px solid #5E47F9;
`

const TableHeader = styled.th`
  max-width: 110px;
  text-align: center;
  font-size: 16px;
  line-height: 19px;
  font-weight: 700;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 10px;
`

const TableBodyRow = styled.tr`
  text-align: center;
  color:#fff;
`

const CarImage = styled.img `
  width: 120px;
  height: 120px;
  object-fit: contain;
`


const ColorBox = styled.div `
  width: 70px;
  height: 70px;
  border-radius: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${(props) => props.bgColor};
`

const DeleteCarButton = styled.button`
  background-color: #DF2525;
  border: none;
  padding: 5px;
  border-radius: 10px;
  color: #fff;
  width: 85px;
`

export { Table }