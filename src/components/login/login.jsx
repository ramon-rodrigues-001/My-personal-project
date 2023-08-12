import styles from './login.module.scss'
import { Link } from "react-router-dom"

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
          <h1>LOGIN <img src="./logo-transparent.png" alt="logo" className={styles.logo} /></h1>

          <form action="#" className={styles.formulario}>
            <div>
              <label htmlFor="email" className={styles.label}>Email:</label> <br />
              <input type="text" className={styles.input} placeholder='@gmail.com' id='email'/>
            </div>

            <div>
              <label htmlFor="senha" className={styles.label}>Senha:</label> <br />
              <input type='password' className={styles.input} placeholder='12345' id='senha'/>
              <p onClick={exibirSenha} className={styles.Exibir} id='exibir'>
                MOSTRAR SENHA
              </p>
            </div>
          </form>


          <div className={styles.links}>
            <Link to="/vitrine" className={styles.examinador}>
              Entrar
            </Link>
            <Link to="/vitrine" className={styles.examinador}>
              Entrar sem login
            </Link>

            <Link to="/register" className={styles.link}>
              Não possuo uma conta
            </Link>
            <Link to="#" className={styles.link}>
              Esqueci minha senha
            </Link>
          </div>
        </div>
    </section>
  )
}

export default Login