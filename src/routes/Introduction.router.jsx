import "../styles/globals.scss"
import { Fragment } from "react"
import Header from "../components/introduction/1-header/header"
import Apresentation from "../components/introduction/2-home/home"
import Mission from "../components/introduction/3-mission/mission"
import Cards from "../components/introduction/4-cards/cards"
import Accordion from "../components/introduction/5-accordion/accordion"
import Footer from "../components/introduction/6-footer-contatos/footer"

function IntroductionRoutes() {

  return (
    <Fragment>
      <section className="sectionBackground">
        <Header />
        <Apresentation />
      </section>
      <section className="main">
        <Mission />
        <Cards />
        <Accordion />
        <Footer />
      </section>
    </Fragment>
  )
}

export default IntroductionRoutes