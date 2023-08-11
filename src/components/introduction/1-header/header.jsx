import styles from "./header.module.scss"
import { Fragment } from "react"

export default function Header() {
    return (
        <Fragment>
            <div className={styles.ctaSection}>
                    <p>
                        Se cadastre para ter acesso aos PDFs
                    </p>
            </div>

            <header className={styles.headerIntrodution}>
                <h1>
                    <img src="./logo-transparent.png" alt="" className={styles.logo}/>
                </h1>
                <div>
                    <ul className={styles.list}>
                        <li>
                            <a href="#ancoraMissao">
                                Missão
                            </a>
                        </li>
                        <li>
                            <a href="#ancoraCategorias">
                                Categoria
                            </a>
                        </li>
                        <li>
                            <a href="#ancoraDuvidas">
                                Duvidas
                            </a>
                        </li>
                        <li>
                            <a href="#ancoraContatos">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </div>
                <div className={styles.sectionLinks}>
                    <a href="/My-personal-project/login/">
                        <button className={styles.btnNav}>
                            Entrar
                        </button>
                    </a>
                    <a href="/My-personal-project/register/">
                        <button className={styles.btnNav}>
                            Quero fazer parte
                        </button>
                    </a>
                </div>
            </header>
        </Fragment>
    )
}