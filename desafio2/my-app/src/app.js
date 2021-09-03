import { useState } from 'react'
import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { Content } from './content'
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
    content: <Content2 />,
  },
  {
    id: 3,
    title: 'Receita de Maria Mole',
    content: <Content3 />,
  },
]

function App () { 
  const [title] = useState(articles[1].title);
  const [content]= useState(articles[1].content);

  return (
    <>
   <Container>
      <Header />
      <Menu />
      <Sidebar articles={articles}></Sidebar>
      <Content>
        <H2>{title}</H2>
        {content}
      </Content>
      <Footer />
    </Container>
    </>
  )
}

export { App }