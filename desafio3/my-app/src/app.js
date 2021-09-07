import { useState, useEffect } from 'react'
import { url, Form } from './form'
import { Table } from './table'


function App () {
  const [cars, setCars] = useState([]);

  useEffect(() => {
   function getCars() {
      const result = fetch(url)
      .then(response => response.json())
      .then(responseJson => setCars(responseJson))

      if (result.error) {
        console.log('Erro ao buscar carros', result.message)
        return
      }

      if (result.length === 0) {
        setCars('Nenhum carro encontrado')
        return
      }
    }
    getCars()

  },[])
  

  return (
    <>
      <h1>Cars</h1>
      <div className="container">
        <Form cars={cars} setCars={setCars}/>
        <Table cars={cars} setCars={setCars} />
      </div>
    </>
  )
}

export { App }