import styles from "./mission.module.scss"

export default function Mission() {
    return (
        <section className={styles.mission}>
            <p className={styles.subTitle}>
                NOSSA MISÃO
            </p>

            <h2 className={styles.title}>
                Ferramenta para promover o conhecimento livre
            </h2>
        
            <p className={styles.descrition}>
                Nosso site é um refúgio para o conhecimento, desafiando as amarras impostas oferecendo acesso a uma ampla variedade de livros e segredos ocultos em formato PDF. Buscamos construir uma comunidade unida na busca pelo aprendizado e na superação das barreiras ao conhecimento. Nossa biblioteca é atualizada com informações subversivas de autores corajosos. Junte-se a nós nessa revolução silenciosa.
            </p>
        </section>
    )
}