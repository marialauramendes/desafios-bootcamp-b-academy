import { H3 } from './headings'
import { P } from './paragraph'

function Content2 () {
  return(
    <>
      <P>Para preparar esta receita você irá precisar de, macarrão instantâneo, água e tempero pronto.</P>
      <H3 children="Modo de preparo"/>
      <ol>
        <li>Ferva 450 ml de água.</li>
        <li>Junte o macarrão e cozinhe por 3 minutos.</li>
        <li>Retire do fogo e misture o tempero.</li>
      </ol>
    </>
  )
}

export { Content2 }