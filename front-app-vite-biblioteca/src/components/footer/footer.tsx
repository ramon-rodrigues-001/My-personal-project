import styles from "./footer.module.scss";

export default function Form() {
    return (
        <footer className={styles.footer}>
            <div>
                <p className={styles.subTitle}>ME CONTATE</p>
                <h2 className={styles.title}>Entre em contato comigo!</h2>
            </div>

            <div className={styles.container_de_contatos}>
                <div>
                    <img src="/logo-transparent.png" alt="logo"  className={styles.logo}/>
                    <h2>
                        <span>Cont</span>atos
                    </h2>
                    <div>
                        <a href="https://www.linkedin.com/in/ramon-rodrigues-515a9b244/" target="_blank">
                            Linkedin
                        </a>
                        <a href="https://github.com/ramon-rodrigues-001" target="_blank">
                            Github
                        </a> 
                        <a href="https://www.facebook.com/profile.php?id=100084075099565" target="_blank">
                            Facebook
                        </a>
                    </div>
                    <p><strong>Email: </strong>ramon.rodrigues.dev@gmail.com</p>
                    <p><strong>Cell: </strong>(33) 97879-2332</p>
                    <p><strong>Endereço: </strong>Capelinha-MG 39680-000</p>
                    <p>
                        V:1 04/07/2023
                    </p>
                </div>
    
    
                <form action="mailto:ramon.rodrigues.dev@gmail.com" method="post" className={styles.form}>
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
            </div>
        </footer>
    )
}