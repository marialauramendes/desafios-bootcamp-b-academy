import {  H2 } from './headings'

function Sidebar ({articles, setContent, setTitle}){

  return(
    <aside>
    <H2>Sidebar</H2>
    <ul>
      {articles.map((item) => (
        <li key={item.id} >
          <a href="/" onClick={(e) => {
            e.preventDefault()
            setTitle(item.title)
            setContent(item.content)
          }} >{item.title}</a>
        </li>
      ))}
    </ul>
    </aside>
  )
}

export { Sidebar }