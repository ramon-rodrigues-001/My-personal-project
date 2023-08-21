import styles from './headerVitrine.module.scss';

export default function HeaderVitrine(props) {

    window.onscroll = function() {
        const scroll = document.documentElement.scrollTop

        let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight

        let rolagem = (scroll / altura) * 100

        const logo = document.querySelector('#logoHeaderVitrine')
        const linkLogo = document.querySelector(styles.linkLogo)
        const header = document.querySelector('#headerVitrine')

        if (rolagem <= '1') {
            linkLogo.style.display = 'block'
            logo.classList = styles.logoVitrine
            header.style.backgroundColor = 'transparent'
            header.style.padding = '20px 0px'
            header.style.transition = '1s'
        }
        else if (rolagem > 1) {
            linkLogo.style.display = 'none'
            logo.classList = styles.logoNone
            header.style.backgroundColor = '#101010'
            header.style.padding = '10px 0px'
            header.style.transition = '1s'
        }
    }

    return (
        <header className={styles.headerVitrine} id='headerVitrine'>
            <div className={styles.containerHeaderVitrine}>
                <a href="/My-personal-project/vitrine" id={styles.linkLogo} className={styles.linkLogo}>
                    <img src="./logo-transparent.png" alt="logo" className={styles.logoVitrine} id='logoHeaderVitrine'/>
                </a>

                {!props.lista && (
                    <ul className={styles.listaHeaderVitrine}>
                        <li>Por Topico</li>
                        <li>Por Author</li>
                        <li>Por Data</li>
                    </ul>
                )}
                

                <div className={styles.cicleUser}>
                    RR
                </div>

                <div className={styles.menu}>
                    <div className={styles.traco}></div>
                    <div className={styles.traco}></div>
                    <div className={styles.traco}></div>
                </div>
            </div>
        </header>
    )
}