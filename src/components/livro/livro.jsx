import styles from "./livro.module.scss"
import HeaderVitrine from "../vitrine/1-header-vitrine/headerVitrine"

function Livro() {
    return(
        <div className={styles.livro}>
            <HeaderVitrine 
                lista = {"false"}
            />

            <div className={styles.divImgLivro}>
                <img src="https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg" alt="" className={styles.imgLivro}/>
            </div>
            
        </div>
    )
} 

export default Livro