import styles from './containerLivros.module.scss';

export default function ContainerLivros() {
    return (
        <section className={styles.sectionLivros}>
            <div className={styles.containerLivro}>
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
                </div>

                <div>
                    <ul className={styles.paginatio}>
                        <li>
                            <a className={styles.pageLink}>Previous</a>
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
                            <a className={styles.pageLink}>Next</a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}