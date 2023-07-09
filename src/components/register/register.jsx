import styles from './register.module.scss'

function Register() {
  return (
    <section className={styles.sectionRegister}>
        <div className={styles.cardRegister}>
          <h1>REGISTER <img src="/logo-transparent.png" alt="logo" className={styles.logo} /></h1>

          <form action="#" className={styles.formulario}>
            <div>
              <label htmlFor="email" className={styles.label}>Email: </label> <br />
              <input type="text" placeholder='exemplo@gmail.com' className={styles.input} id='email'/>
            </div>

            <div>
              <label htmlFor="senha-1" className={styles.label}>Senha: </label> <br />
              <input type="password" placeholder='User023' className={styles.input} id='senha-1'/>
            </div>

            <div>
              <label htmlFor="senha-2" className={styles.label}>Comfirmar Senha: </label> <br />
              <input type="password" placeholder='User023' className={styles.input} id='senha-2'/>
              <p className={styles.Exibir} id='exibir'>
                MOSTRAR SENHA
              </p>
            </div>
          </form>

          <a href="/deploy-my-project/" className={styles.volar}>&lt; Voltar</a>


        </div>
    </section>
  )
}
  
export default Register