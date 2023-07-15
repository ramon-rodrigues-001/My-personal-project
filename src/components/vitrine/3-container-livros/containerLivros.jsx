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