import React, { Fragment } from 'react'
import Header from './components/1-Header/Header.jsx'
import Apresentation from './components/2-Apresentation/Apresentation.jsx'
import CardsFlutuante from './components/3-CardFlutuante/CardsFlutuante.jsx'
import Destaque from './components/4-Destaque/Destaque.jsx'
import Icones from './components/0-Icones/Icones.jsx'

function App() {

  return (
    <Fragment>
      <Header />
      
      <Icones />
      <Apresentation />
      <CardsFlutuante />
      <Destaque 
        link={["/src/assets/vaso-de-rosa-venda-1.jpg", "/src/assets/vaso-de-rosa-venda-1.jpg", "/src/assets/vaso-de-rosa-venda-1.jpg"]}
      />
    </Fragment>
  )
}

export default App
