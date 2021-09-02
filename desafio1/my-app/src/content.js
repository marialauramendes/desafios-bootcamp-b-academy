import { H2, H3 } from './headings'
import { P } from './paragraph'
import { List } from './list'
import { ButtonsWrapper } from './buttons-wrapper'

function Content () {
  return(
    <>
    <main>
      <H2 children="Receita de Miojo"/>
      <P/>
      <H3 children="Modo de preparo"/>
      <List/>
      <ButtonsWrapper/>
    </main>
    </>
  )
}

export { Content }