function Form ({handleSubmit}) {
  

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="field-wrapper">
        <label htmlFor="image">Imagem</label>
        <input type="url" name="image"/>
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

export { Form }