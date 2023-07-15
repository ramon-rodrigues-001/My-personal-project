import styles from './login.module.scss'

function Login() {

  function exibirSenha() {
    const inputSenha = document.querySelector('#senha')
    const btnExibir = document.querySelector('#exibir')

    if (inputSenha.type === "password") {
      inputSenha.type = "text"
      btnExibir.innerHTML = "COBRIR SENHA"
    }
    else if (inputSenha.type === "text") {
      inputSenha.type = 'password'
      btnExibir.innerHTML = "MOSTRAR SENHA"
    }
  }

  return (
    <section className={styles.sectionLogin}>
        <div className={styles.cardLogin}>
          <h1>LOGIN <img src="/logo-transparent.png" alt="logo" className={styles.logo} /></h1>

          <form action="#" className={styles.formulario}>
            <div>
              <label htmlFor="email" className={styles.label}>Email:</label> <br />
              <input type="text" className={styles.input} placeholder='exemplo@gmail.com' id='email'/>
            </div>

            <div>
              <label htmlFor="senha" className={styles.label}>Senha:</label> <br />
              <input type='password' className={styles.input} placeholder='User455454' id='senha'/>
              <p onClick={exibirSenha} className={styles.Exibir} id='exibir'>
                MOSTRAR SENHA
              </p>
            </div>
          </form>

          <a href="/" className={styles.volar}>&lt; Voltar</a> <br />


          <div className={styles.links}>
            <a href="/vitrine" className={styles.examinador}>
              Entrar
            </a>
            <a href="/vitrine" className={styles.examinador}>
              Entrar sem login
            </a>

            <a href="/register" className={styles.link}>
              Não possuo uma conta
            </a>
            <a href="#" className={styles.link}>
              Esqueci minha senha
            </a>
          </div>
        </div>
    </section>
  )
}

export default Login