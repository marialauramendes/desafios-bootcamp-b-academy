import { H2, H3 } from './headings'
import { P } from './paragraph'
import { List } from './list'
import { Button } from './button'
import { ButtonsWrapper } from './buttons-wrapper'

function Content2 () {
  return(
    <>
    <main>
      <H2 children="Receita de Miojo"/>
      <P>Para preparar esta receita você irá precisar de, macarrão instantâneo, água e tempero pronto.</P>
      <H3 children="Modo de preparo"/>
      <List/>
      <ButtonsWrapper>
        <Button kind="secondary" children="Voltar"/>
        <Button kind="primary" children="Avançar"/>
      </ButtonsWrapper>
    </main>
    </>
  )
}

export { Content2 }