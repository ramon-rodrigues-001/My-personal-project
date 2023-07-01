import styles from "./cards.module.scss"

export default function Cards() {
    return (
        <section className={styles.sectionCards}>
            <p className={styles.subTitle}>OQUE VOCÊ VAI ACESSAR</p>

            <div className={styles.containerDeCards}>
                <div className={styles.cards}>
                    <img src="/livros.jpg" alt="livros" />
                    <p className={styles.cardTitle}>Livros em PDF</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse ipsam nam dolorem pariatur eum dicta officiis placeat! Sunt, dolore ex dolor qui obcaecati repellat laboriosam dolorem facere hic quibusdam.</p>
                </div>
                <div className={styles.cards}>
                    <img src="/livro3.jpg" alt="livros" />
                    <p className={styles.cardTitle}>Card 01</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse ipsam nam dolorem pariatur eum dicta officiis placeat! Sunt, dolore ex dolor qui obcaecati repellat laboriosam dolorem facere hic quibusdam.</p>
                </div>
                <div className={styles.cards}>
                    <img src="/livro4.jpg" alt="livros" />
                    <p className={styles.cardTitle}>Card 01</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse ipsam nam dolorem pariatur eum dicta officiis placeat! Sunt, dolore ex dolor qui obcaecati repellat laboriosam dolorem facere hic quibusdam.</p>
                </div>
                <div className={styles.cards}>
                    <img src="/livro2.jpg" alt="livros" />
                    <p className={styles.cardTitle}>Card 01</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque esse ipsam nam dolorem pariatur eum dicta officiis placeat! Sunt, dolore ex dolor qui obcaecati repellat laboriosam dolorem facere hic quibusdam.</p>
                </div>
            </div>
        </section>
    )
}