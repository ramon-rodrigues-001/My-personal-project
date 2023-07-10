import styles from './headerVitrine.module.scss'

export default function HeaderVitrine() {

    function removerLogo() {
        const logo = document.querySelector('#logoHeaderVitrine')
        const header = document.querySelector('#headerVitrine')

        logo.classList.toggle(styles.logoVitrine)
        logo.classList.toggle(styles.logoNone)

        if (logo.classList == styles.logoNone) {
            header.style.backgroundColor = '#101010'
            header.style.padding = '10px 0px'
            header.style.transition = '1s'
        }else if (logo.classList == styles.logoVitrine) {
            header.style.backgroundColor = 'transparent'
            header.style.padding = '20px 0px'
            header.style.transition = '1s'
        }
    }


    return (
        <header className={styles.headerVitrine} onClick={removerLogo} id='headerVitrine'>
            <div className={styles.containerHeaderVitrine}>
                <img src="/logo-transparent.png" alt="logo" className={styles.logoVitrine} id='logoHeaderVitrine'/>

                <ul className={styles.listaHeaderVitrine}>
                    <li>Por Topico</li>
                    <li>Por Author</li>
                    <li>Por Data</li>
                </ul>

                <div className={styles.cicleUser}>
                    RR
                </div>
            </div>
        </header>
    )
}