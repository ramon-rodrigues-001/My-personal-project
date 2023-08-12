import { Link } from 'react-router-dom'
import styles from './homeVitrine.module.scss'

export default function HomeVitrine() {
    return (
        <div className={styles.apresentationVitrine} id={styles.apresentationVitrine}>
            <p className={styles.subtitle}>
                WELCOME
            </p>

            <h1 className={styles.title}>
                literatura livre: baixe ebooks totalmente gratuito.
            </h1>

            <p className={styles.descrition}>
                Leia de ende estiver a qualquer momento,  <br />E continue evoluindo e aprendendo.
            </p>

            <Link to="/" className={styles.linkBtnPlay}>
                <button className={styles.buttonPlay}>
                    Voltar ou home
                </button>
            </Link>
        </div>
    )
}