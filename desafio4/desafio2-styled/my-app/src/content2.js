import { TextParagraph } from './text-paragraph'
import { H3 } from './headings'
import styled from 'styled-components'

function Content2 () {
  return(
    <>
      <TextParagraph>Para preparar esta receita você irá precisar de, macarrão instantâneo, água e tempero pronto.</TextParagraph>
      <H3 children="Modo de preparo"/>
      <OrdenedList>
        <ListItem>Ferva 450 ml de água.</ListItem>
        <ListItem>Junte o macarrão e cozinhe por 3 minutos.</ListItem>
        <ListItem>Retire do fogo e misture o tempero.</ListItem>
      </OrdenedList>
    </>
  )
}

const OrdenedList = styled.ol`
  list-style-type: decimal;
  list-style-position: inside;
`

const ListItem = styled.li`
  font-family: Inter;
  font-size: 16px;
  line-height: 19px;
  font-weight: 300;
  letter-spacing: 0.01em;
  color: #000000;
  margin-bottom:5px;
`

export { Content2 }