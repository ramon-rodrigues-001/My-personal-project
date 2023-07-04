import styles from "./form.module.scss";

export default function Form() {
    return (
        <section>

            <div>
                <h2 className={`h1 ${styles["text-center"]}`}>
                    <span className={`span-azulMarinho ${styles["span-azulMarinho"]}`}>Cont</span>atos
                </h2>
                <div>
                    <a className={`btn btn-outline-info btnPersonalizado footer-cards ${styles["footer-cards"]}`} href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">
                        {/* <p className="h1"><BiLinkedin /></p> */}
                        Linkedin
                    </a>
                    <a className={`btn btn-outline-info btnPersonalizado footer-cards ${styles["footer-cards"]}`} href="https://github.com/ramon-rodrigues-001" target="_blank">
                        {/* <p className="h1"><BiGithub /></p> */}
                        Github
                    </a>
                    <a className={`btn btn-outline-info btnPersonalizado footer-cards ${styles["footer-cards"]}`} href="https://www.facebook.com/profile.php?id=100084075099565" target="_blank">
                        {/* <p className="h1"><BiFacebook /></p> */}
                        Facebook
                    </a>
                </div>
                <p><strong>Email: </strong>ramon.rodrigues.dev@gmail.com</p>
                <p><strong>Cell: </strong>(33) 97879-2332</p>
                <p><strong>Endereço: </strong>Capelinha-MG 39680-000</p>
                <p data-aos="fade-right" data-aos-duration="2000">
                    V:1.0_01/10/2022
                </p>
                <p data-aos="fade-right" data-aos-duration="3000">
                    V:2.0_05/06/2023
                </p>
            </div>


            <form action="mailto:ramon.rodrigues.dev@gmail.com" method="post" className={styles.form}>
                <p className={styles.subTitle}>ME CONTATE</p>
                <div className={styles.div_name_email}>
                    <div>
                        <label htmlFor="name">Nome completo: </label> <br/>
                        <input type="text" id="name" required placeholder="Voce..." />
                    </div>

                    <div>
                        <label htmlFor="email">Email: </label> <br/>
                        <input type="text" id="email" required placeholder="@gmail.com" />
                    </div>
                </div>
                <br />

                <div className={styles.div_textarea}>
                    <label htmlFor="smg">Mensagem: </label> <br/>
                    <textarea name="smg" id="smg" required placeholder="Fale comigo por aqui 😃✌"></textarea>
                </div>

                <input type="submit" className={styles.submit} value="ENVIAR" />
            </form>
        </section>
    )
}