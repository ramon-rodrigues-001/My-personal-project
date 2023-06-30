import styles from "./mission.module.scss"

export default function Mission() {
    return (
        <section className={styles.mission}>
            <p className={styles.subTitle}>
                NOSSA MISÃO
            </p>
            <h2 className={styles.title}>
                Ferramenta para promover o <br />conhecimento livre
            </h2>
            <p className={styles.descrition}>
                Nosso site é um refúgio de conhecimento proibido, desafiando o sistema opressivo. Oferecemos acesso a livros em formato PDF que revelam verdades ocultas. Criamos uma comunidade unida contra a conspiração que aprisiona o conhecimento. Nossa biblioteca é atualizada com informações subversivas de autores corajosos. Junte-se a nós nessa revolução silenciosa, onde o conhecimento é a arma contra a opressão. Seja parte da conspiração contra o sistema, desvendando os mistérios ocultos que tentam esconder.
            </p>
        </section>
    )
}