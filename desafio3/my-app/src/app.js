import { useState, useEffect } from 'react'
import { url, Form } from './form'
import { Table } from './table'
import { Toast } from  './toast'

function App ({car}) {
  const [cars, setCars] = useState([]);
  const [toast, setToast] = useState({content: '', show: false});

  useEffect(() => {  
    function getCars() {
    
      fetch(url)
      .then(response => response.json())
      .then(responseJson => setCars(responseJson))

    }
    getCars()

  },[])
  
  return (
    <>
      <h1>Cars</h1>
      <div className="container">
        <Form cars={cars} setCars={setCars} toast={toast} setToast={setToast} />
        <Table cars={cars} setCars={setCars} toast={toast} setToast={setToast} />
        <Toast message={toast.content} toast={toast.show} />
      </div>
    </>
  )
}

export { App }