import styled from "styled-components";
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

    
    setCars((prevState) => {
      const isPlateExistent = prevState.find((prevCar) => prevCar.plate === car.plate);
    
      if (isPlateExistent === false) {
        return [...prevState, car]
      } else {
        return prevState;
      }
    });


    event.target.reset()
  
  }

  return (
    <>
    <FormContainer onSubmit={handleSubmit} >
      <FieldWrapper>
        <Label htmlFor="image">Imagem</Label>
        <Input type="url" name="image"  autoFocus/>
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="brand-model">Marca e Modelo</Label>
        <Input type="text" name="brand-model"/>
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="year">Ano</Label>
        <Input type="number" name="year"/>
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="plate">Placa</Label>
        <Input type="text" name="plate"/>
      </FieldWrapper>

      <FieldWrapper>
        <Label htmlFor="color">Cor</Label>
        <Input type="color" name="color"/>
      </FieldWrapper>

      <Button type="submit">Cadastrar Carro</Button>
    </FormContainer>
    </>
  )
}

const FormContainer = styled.form`
  width:30%;
  margin-right:50px;
`

const FieldWrapper = styled.div`
  margin-bottom:15px;
`
const Label = styled.label`
  display:block;
  margin-bottom:10px;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  letter-spacing: 0.04em;
  color: #F1F4F9;
`


const Input = styled.input`
  height:40px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.17);
  :not([type="color"]){
    width:100%;
    background-color: #2B2C42;
    border: none;
    border-radius: 10px;
    padding:10px;
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    letter-spacing: 0.02em;
    color: #F1F4F9;
  }

  &[type="color"]{
    width:40px;
    background-color:transparent;
    border:none;
  }
  &:focus, &:focus-visible{
    outline:none;
    border: 1px solid #5E47F9;
  }


`



const Button = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  max-width: 200px;
  width:100%;
  height: 50px;
  background: #5E47F9;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: auto;
  border:none;
  font-size: 16px;
  font-weight: 500;
  line-height: 18px;
  text-transform: capitalize;
  color: #FFFFFF;


`
export { url, Form }