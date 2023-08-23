import { useState } from 'react';
import styles from './headerVitrine.module.scss';

export default function HeaderVitrine(props) {
    const [linkLogo, setLinkLogo] = useState(true)

    window.onscroll = function() {
        const scroll = document.documentElement.scrollTop

        let altura = document.documentElement.scrollHeight - document.documentElement.clientHeight

        let rolagem = (scroll / altura) * 100

        const header = document.querySelector('#headerVitrine')

        if (rolagem <= '1') {
            setLinkLogo(true)
            header.style.backgroundColor = 'transparent'
            header.style.padding = '20px 0px'
            header.style.transition = '1s'
        }
        else if (rolagem > 1) {
            setLinkLogo(false)
            header.style.backgroundColor = '#101010'
            header.style.padding = '10px 0px'
            header.style.transition = '1s'
        }
    }

    return (
        <header className={styles.headerVitrine} id='headerVitrine'>
            <div className={styles.containerHeaderVitrine}>
                {linkLogo && (
                    <a href="/vitrine" className={styles.linkLogo}>
                        <img src="./logo-transparent.png" alt="logo" className={styles.logoVitrine}/>
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