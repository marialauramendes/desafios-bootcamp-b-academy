import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { Content } from './content'
import { Footer } from './footer'


function App () { 
  return (
    <>
    <Header />
    <Menu />
    <main>
    <Sidebar />
    <Content />
    </main>
    <Footer />
    </>
  )
}

export { App }