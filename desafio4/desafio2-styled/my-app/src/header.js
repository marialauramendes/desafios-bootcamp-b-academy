import styled from 'styled-components'
import { H1 } from './headings'

function Header () {
  return (
      <HeaderContainer>
        <H1>Receitas</H1>
      </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  grid-area: header;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:30px;
`

export { Header } 