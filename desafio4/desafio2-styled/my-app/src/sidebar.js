import styled from 'styled-components'

function Sidebar ({articles, setContent, setTitle}){

  return(
    <Aside>
    <RecipesList>
      {articles.map((item) => (
        <ListItem key={item.id} >
          <Link href="/" onClick={(e) => {
            e.preventDefault()
            setTitle(item.title)
            setContent(item.content)
          }} >{item.title}</Link>
        </ListItem>
      ))}
    </RecipesList>
    </Aside>
  )
}

const Aside = styled.aside`
  grid-area: aside;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #000;
  padding-top:25px;
  padding-bottom:25px;
  padding-left: 50px;
  padding-right: 50px;
`

const RecipesList = styled.ul`
  text-align:center;
  list-style-type: decimal-leading-zero;
  list-style-position: outside;
`

const ListItem = styled.li`
  font-family: 'Playfair Display SC';
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #000;
  width:130px;
  margin-bottom:30px;

  &:hover{
    color:#61A882;
    font-weight:700;
    -webkit-transition:.3s;
    transition:.3s;
  }

`
const Link = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
`

export { Sidebar }