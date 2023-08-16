import styles from './containerLivros.module.scss';

export default function ContainerLivros() {
    return (
        <section className={styles.sectionLivros}>
            <div className={styles.containerLivro}>

                <div className={styles.pesquisa} >
                    <input type="text" className={styles.inputPesquisa} placeholder='Procurar'/>
                    <img src="./icone-lupa.png" alt="" className={styles.imgLupa}/>
                </div>

                <div className={styles.espacoDeLivros}>
                    <div className={styles.cardLivro}>
                        <img src="https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg" alt="" className={styles.livro1}/>
                        <img src="/carrinho-apagar.png" alt="" className={styles.carrin}/>
                        <h3>TECNOLOGIA O MOTO...</h3>
                        <div>
                            <h3 className={styles.del}><s>R$36,00</s></h3>
                            <h3>R$10,00</h3>
                        </div>
                    </div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                    <div className={styles.cardLivro}></div>
                </div>

                <div>
                    <ul className={styles.paginatio}>
                        <li>
                            <a className={styles.pageLink} id={styles.previous}>Previous</a>
                        </li>
                        <li>
                            <a className={styles.pageLink}>1</a>
                        </li>
                        <li>
                            <a className={styles.pageLink}>2</a>
                        </li>
                        <li>
                            <a className={styles.pageLink}>3</a>
                        </li>
                        <li>
                            <a className={styles.pageLink} id={styles.next}>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}