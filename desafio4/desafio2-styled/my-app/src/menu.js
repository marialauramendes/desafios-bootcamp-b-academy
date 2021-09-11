import styled from 'styled-components'

function Menu () {
  return (
    <>
    <Nav>
      <List>
        <ListItem>
         <Link href="/">início</Link>
        </ListItem>
        <ListItem>  
          <Link href="/">receitas</Link>
        </ListItem>
        <ListItem>
          <Link href="/">contato</Link>
        </ListItem>
      </List>
    </Nav>
    </>
  )
}

const Nav = styled.nav`
  grid-area: nav;
  text-align: center;
  margin-bottom: 15px;
`

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content:center
`
const ListItem = styled.li`
  font-family: Georgia;
  font-size: 18px;
  line-height: 22px;
  font-weight: 300;
  letter-spacing: 0.18em;
  text-transform: lowercase;
  color: #000000; 
  list-style-type:none;
  -webkit-transition:.3s;
  transition:.3s;
  :not(:last-child){
    margin-right: 40px;
  }
  &:hover{
   color:#FFAA04;
   -webkit-transition:.3s;
  transition:.3s;
  }

`
const Link = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`

export { Menu }