

const url = 'http://localhost:3333/cars'

function Form ({setCars, setToast}) {

  async function handleSubmit(event) {
    event.preventDefault();
  
    const car = {
      image: event.target.elements.image.value,
      brandModel: event.target.elements['brand-model'].value,
      year: event.target.elements.year.value,
      plate: event.target.elements.plate.value,
      color: event.target.elements.color.value,
    }

    await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(car)
    }).then(response => response.json())
    .then(responseJson => setToast({content: responseJson.message, show: true})) 
    
    setTimeout(() => {
      setToast({content: '', show: false})
    }, 3000)

    
    setCars((prevData) => {
      return [...prevData, car]
    })

    event.target.reset()
  
  }

  return (
    <>
    <form onSubmit={handleSubmit} >
      <div className="field-wrapper">
        <label htmlFor="image">Imagem</label>
        <input type="url" name="image"  autoFocus/>
      </div>

      <div className="field-wrapper">
        <label htmlFor="brand-model">Marca e Modelo</label>
        <input type="text" name="brand-model"/>
      </div>

      <div className="field-wrapper">
        <label htmlFor="year">Ano</label>
        <input type="number" name="year"/>
      </div>

      <div className="field-wrapper">
        <label htmlFor="plate">Placa</label>
        <input type="text" name="plate"/>
      </div>
      <div className="field-wrapper">
        <label htmlFor="color">Cor</label>
        <input type="color" name="color"/>
      </div>

      <button type="submit">Cadastrar Carro</button>
    </form>
    </>
  )
}

export { url, Form }