import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { Footer } from './footer'
import { Container } from './container'
import {  H2 } from './headings'
import { Content1 } from './content1'
import { Content2 } from './content2'
import { Content3 } from './content3'

const articles = [
  {
    id: 1,
    title: 'Receita de gelatina',
    content: <Content1 />,
     
  },
  {
    id: 2,
    title: 'Receita de Miojo',
    content: <Content2 />
  },
  {
    id: 3,
    title: 'Receita de Maria Mole',
    content: <Content3 />
  },
]

function App () { 

  return (
    <>
   <Container>
      <Header />
      <Menu />
      <Sidebar>
        <H2>Sidebar</H2>
        <ul>
          {articles.map((item) => (
            <li key={item.id}>
              <a href="/">{item.title}</a>
            </li>
          ))}
        </ul>
      </Sidebar>
      <Content1 />
      <Footer />
    </Container>
    </>
  )
}

export { App }