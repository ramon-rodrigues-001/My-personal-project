import "../styles/globals.scss"
import { Fragment } from "react"
import Header from "../components/introduction/1-header/header"
import Apresentation from "../components/introduction/2-home/home"
import Cards from "../components/introduction/4-cards/cards"
import Accordion from "../components/introduction/5-accordion/accordion"
import Footer from "../components/introduction/6-footer-contatos/footer"
import Aviso from "../components/introduction/2-aviso/aviso"

function IntroductionRoutes() {

  return (
    <Fragment>
      <section className="sectionBackground">
        <Header />
        <Apresentation />
        <Aviso />
      </section>
      <section className="main">
        <Cards />
        <Accordion />
        <Footer />
      </section>
    </Fragment>
  )
}

export default IntroductionRoutes