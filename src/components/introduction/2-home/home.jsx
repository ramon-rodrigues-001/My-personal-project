import styles from "./home.module.scss";

export default function Apresentation() {
    return (
        <div className={styles.apresentation}>
            <p className={styles.subtitle}>
                ACESSO ILIMITADO
            </p>

            <h1 className={styles.title}>
                Tenha acesso aos melhores PDFs, E livros totalmente gratuito.
            </h1>

            <p className={styles.descrition}>
                Leia de ende estiver a qualquer momento,  <br />E continue evoluindo e aprendendo.
            </p>

            <a href="/" className={styles.linkBtnPlay} id="ancoraMissao">
                <button className={styles.buttonPlay}>
                    Acessar agora
                    <img src="/buttonPlay.svg" alt="Img Play" 
                    className={styles.imgPlay}/>
                </button>
            </a>
        </div>
    )
}