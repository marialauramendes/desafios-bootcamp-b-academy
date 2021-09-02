import { Button } from './button'

function ButtonsWrapper () {
  return (
    <div className="buttons-wrapper">
      <Button kind="secondary" children="Voltar"/>
      <Button kind="primary" children="Avançar"/>
    </div>
  )
}

export { ButtonsWrapper }