import React, { useState } from "react";
import styles from "./livro.module.scss"
import HeaderVitrine from "../vitrine/1-header-vitrine/headerVitrine"
// import { Modal } from "react-bootstrap";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../../node_modules/bootstrap/dist/js/bootstrap";

function Livro() {

    // const [showModal, setShowModal] = useState(false);

    // const openModal = () => {
    //   setShowModal(true);
    // };
  
    // const closeModal = () => {
    //   setShowModal(false);
    // };




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
                    
                        <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">COMPRAR</button>
                    </div>
                </div>


            
                <a href="/My-personal-project/vitrine" className={styles.linkVoltar}>
                    <button>&lt; VOLTAR</button>
                </a>




                <div class={styles.divModal} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div>
                        <div class="modal-content">
                            <div class={styles.modalHeader}>
                                <h2 class="modal-title fs-5" id="staticBackdropLabel">Pagamento</h2> <hr />
                            </div>
                            <div class={styles.bodyModel}>
                                <div>
                                </div>
                                <div>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam, voluptas odio, qui fuga magnam laborum consequuntur sit unde eum impedit eos deleniti. Incidunt ipsum fuga beatae culpa odit consequatur.</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button data-bs-toggle="modal" data-bs-target="#staticBackdrop">OK</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 

export default Livro











