import { useState, useEffect } from 'react'
import { url, Form } from './form'
import { Table } from './table'


function App () {
  const [cars, setCars] = useState([]);

  useEffect(() => {  
    function getCars() {
    
      fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        if(responseJson.length !== 0){
          setCars(responseJson)
        } 
      })
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