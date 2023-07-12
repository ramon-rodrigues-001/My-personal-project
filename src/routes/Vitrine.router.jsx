import "../styles/globals.scss"
import { Fragment } from "react";
import HeaderVitrine from "../components/vitrine/1-header-vitrine/headerVitrine";
import HomeVitrine from "../components/vitrine/2-home-vitrine/homeVitrine";
import ContainerLivros from "../components/vitrine/3-container-livros/containerLivros";


export default function VitrineRouter() {
    return (
        <Fragment>
            <section className="sectionBackground" id="sectionBackgroundVitrine">
                <HeaderVitrine />
                <HomeVitrine />
            </section>
            
            <ContainerLivros />
        </Fragment>
    )
}