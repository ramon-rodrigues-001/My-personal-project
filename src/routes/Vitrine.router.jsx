import "../styles/globals.scss"
import { Fragment } from "react";
import HeaderVitrine from "../components/vitrine/header-vitrine/headerVitrine";
import HomeVitrine from "../components/vitrine/home-vitrine/homeVitrine";

export default function VitrineRouter() {
    return (
        <Fragment>
            <section className="sectionBackground">
                <HeaderVitrine />
                <HomeVitrine />
            </section>
        </Fragment>
    )
}