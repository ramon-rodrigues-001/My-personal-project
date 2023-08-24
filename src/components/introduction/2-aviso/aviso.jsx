import { useState } from "react"
import styles from "./aviso.module.scss"

export default function Aviso() {
    const [modalMain, setModalMain] = useState(false)

    const ManpularMain = () => {
        if (modalMain) {
            setModalMain(false)
        }
        else if (!modalMain) {
            setModalMain(true)
        }
    }


    return (
        
        <div className={styles.avisoModal} onClick={ManpularMain}>
            <div className={styles.cardAviso}>
                <div className={styles.cardHead}>
                    <p>Avisos</p>
                    <p>+</p>
                </div> 
                {modalMain && (
                    <div className={styles.cardMain}>
                        <br />
                        <ol>
                            <li>Por segurança não incira sua senha de email no login</li> <br />
                            <li>Este site ainda é uma demostração portanto, não pecisa de um registro para assesar o conteúdo</li> <br />
                            <li>O site ainda não contem um banco de dados portanto, talves não tenho o livro que esta procurando</li> <br />
                        </ol>
                    </div>
                )}
            </div>
        </div>
    )
}