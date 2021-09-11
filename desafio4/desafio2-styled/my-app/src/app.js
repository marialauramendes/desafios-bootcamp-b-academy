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
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
  }

  body{
    background-color: #202B24;
    
    -webkit-font-smoothing: antialiased;
    width: 100%;
    padding-top:40px;
    padding-left:40px;
    padding-right:40px;

  }
`
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
  const [title, setTitle] = useState(articles[0].title);
  const [content, setContent]= useState(articles[0].content);

  return (
    <>
    <GlobalStyle />
   <Container>
      <Header/>
      <Menu />
      <Sidebar articles={articles} setTitle={setTitle} setContent={setContent}></Sidebar>
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