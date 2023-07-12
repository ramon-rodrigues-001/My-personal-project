import styles from './containerLivros.module.scss';

export default function ContainerLivros() {
    return (
        <section className={styles.sectionLivros}>
            <div className={styles.containerLivro}>
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
        </section>
    )
}