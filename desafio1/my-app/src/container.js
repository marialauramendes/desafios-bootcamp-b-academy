import { Header } from './header'
import { Menu } from './menu'
import { Sidebar } from './sidebar'
import { Content } from './content'
import { Footer } from './footer'

function Container () {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Sidebar />
      <Content />
      <Footer />

    </div>
  )
}

export { Container }