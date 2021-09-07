import { Form } from './form'
import { Table } from './table'

const url = 'http://localhost:3333/cars'

function App () {

  
  async function handleSubmit(event) {
    event.preventDefault();
  
    const elements = {
      image: event.target.elements.image.value,
      brandModel: event.target.elements['brand-model'].value,
      year: event.target.elements.year.value,
      plate: event.target.elements.plate.value,
      color: event.target.elements.color.value,
    }

    console.log(elements)

    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(elements)
    }).then(response => response.json)
  
    console.log(result)
  
  }

  return (
    <>
      <h1>Cars</h1>
      <div className="container">
        <Form handleSubmit={handleSubmit}/>
        <Table />
      </div>
    </>
  )
}

export { App }