import React, { useState } from "react";
import styles from "./livro.module.scss"
import HeaderVitrine from "../vitrine/1-header-vitrine/headerVitrine"

function Livro() {

    // Exibir Modal
    const [showModal, setShowModal] = useState(false);
    const modelPagamento = document.querySelector('#modelPagamento')
    const openModal = () => {
        setShowModal(true);
    };
    const closeModal = () => {
        setShowModal(false);
    };

    // Copiar chave Pix
    const [copy, setCopy] = useState(false)
    const copiaChave = () => {
        setCopy(true)
        setTimeout(() => setCopy(false), 1500);
    }


    return(
        <div className={styles.containerLivro}>
            <div className={styles.livro}>
                <HeaderVitrine
                    lista = {"false"}
                />

                <div className={styles.divImgLivro}>
                    <img src="https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg" alt="" className={styles.imgLivro}/>
                    <div>
                        <h1>Tecnologia em evidencia</h1> <br />
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reiciendis minus nemo natus voluptatum culpa. Sit odio asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum neque aliquid! Autem minus nemo natus voluptatum culpa. Sit odio asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum neque aliquid! Autem.</p> <br />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam officia porro dolores</p> <br />

                        
                        <p className={styles.preco}>Preço: R$1,90</p> <br />
                    
                        <button onClick={openModal}>COMPRAR</button>
                    </div>
                </div>


            
                <a href="/My-personal-project/vitrine" className={styles.linkVoltar}>
                    <button>&lt; VOLTAR</button>
                </a>


                {showModal && (
                    <div className={styles.divModal} id="modelPagamento">
                        <div className={styles.container}>
                            <div className={styles.headModal}>
                                <h1>Pagamento</h1> <hr />
                            </div>
                            <div className={styles.bodyModal}>
                                <div className={styles.divQRCODE}>
                                    <p><strong>Pagamento via pix:</strong></p> <br />
                                    <img src="https://media.geeksforgeeks.org/wp-content/uploads/20210106102323/MyQRCode1-300x300.png" alt="" />
                                </div>
                                <div>
                                    <h2><strong>Informações:</strong></h2> <br />
                                    <p>Nome Destinatorio: Ramon Rodrigues Cordeiro <br />
                                    Banco Destinatorio: Bradesco <br />
                                    CPF Destinatorio: ***656***-00</p> <br />
                                    
                                    <h3>Chave Pix: Email</h3> <br />
                                    <button onClick={copiaChave}>Copia chave</button>{copy && (<p>Chave email copiado?</p>)}
                                </div>
                            </div>
                            <div className={styles.footerModal}>
                                <button onClick={()=> closeModal()}>OK</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
} 

export default Livro











