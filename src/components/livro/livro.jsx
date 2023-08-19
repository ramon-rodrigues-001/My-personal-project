import styles from "./livro.module.scss"
import HeaderVitrine from "../vitrine/1-header-vitrine/headerVitrine"

function Livro() {
    return(
        <div className={styles.containerLivro}>
            <div className={styles.livro}>
                <HeaderVitrine
                    lista = {"false"}
                />
                <div className={styles.divImgLivro}>
                    <img src="https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg" alt="" className={styles.imgLivro}/>
                    <div>
                        <h1>Tecnologia em evidencia</h1> <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reiciendis minus nemo natus voluptatum culpa. Sit odio asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum neque aliquid! Autem minus nemo natus voluptatum culpa. Sit odio asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum neque aliquid! Autem.</p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam officia porro dolores</p> <br />
                        
                        <p className={styles.preco}>Preço: R$1,90</p>

                        <br />
                        <button>COMPRAR</button>
                    </div>
                </div>
            
                <a href="/My-personal-project/vitrine" className={styles.linkVoltar}>
                    <button>&lt; VOLTAR</button>
                </a>
                
            </div>
        </div>
    )
} 

export default Livro