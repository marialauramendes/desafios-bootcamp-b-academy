
import {  H2 } from './headings'

function Sidebar ({articles}){
  return(
    <>
    <aside>
    <H2>Sidebar</H2>
    <ul>
      {articles.map((item) => (
        <li key={item.id} >
          <a href={item.id}>{item.title}</a>
        </li>
      ))}
    </ul>
    </aside>
    </>
  )
}

export { Sidebar }