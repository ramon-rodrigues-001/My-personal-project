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

            <header className={styles.h}>
                <h1>
                    <img src="/logo-transparent.png" alt="" className={styles.logo}/>
                </h1>
                <div>
                    <ul className={styles.list}>
                        <li>
                            <a href="/">
                                Missão
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Valores
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <a href="/login">
                        <button className={styles.btnNav}>
                            Entrar
                        </button>
                    </a>
                    <a href="/register">
                        <button className={styles.btnNav}>
                            Quero fazer parte
                        </button>
                    </a>
                </div>
            </header>
        </Fragment>
    )
}