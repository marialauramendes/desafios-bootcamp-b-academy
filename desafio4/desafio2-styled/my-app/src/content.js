import styled from 'styled-components'

function Content ({children}) {
  return(
    <Main>{children}</Main>
  )
}

const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 15px 50px;
`

export { Content }