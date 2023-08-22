import { useState } from 'react';
import styles from './headerVitrine.module.scss';

export default function HeaderVitrine(props) {

    const [logo, setLogo] = useState(true)
    const [linkLogo, setLinkLogo] = useState(true)

    window.onscroll = function() {
        const scroll = document.documentElement.scrollTop

        let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight

        let rolagem = (scroll / altura) * 100

        // const logo = document.querySelector('#logoHeaderVitrine')
        // const linkLogo = document.querySelector("linkLogoID")
        const header = document.querySelector('#headerVitrine')

        if (rolagem <= '1') {
            setLogo(true)
            setLinkLogo(true)
            // linkLogo.classList = styles.linkLogo
            // logo.classList = styles.logoVitrine
            header.style.backgroundColor = 'transparent'
            header.style.padding = '20px 0px'
            header.style.transition = '1s'
        }
        else if (rolagem > 1) {
            setLogo(false)
            setLinkLogo(false)
            // linkLogo.classList = styles.linkLogoNone
            // logo.classList = styles.logoNone
            header.style.backgroundColor = '#101010'
            header.style.padding = '10px 0px'
            header.style.transition = '1s'
        }
    }

    return (
        <header className={styles.headerVitrine} id='headerVitrine'>
            <div className={styles.containerHeaderVitrine}>
                {linkLogo && (
                    <a href="/My-personal-project/vitrine" /*id="linkLogoID"*/ className={styles.linkLogo}>
                        <img src="./logo-transparent.png" alt="logo" className={styles.logoVitrine} /*id='logoHeaderVitrine'*//>
                    </a>
                )}

                

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