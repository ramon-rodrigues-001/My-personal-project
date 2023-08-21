import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import styles from "./livro.module.scss"
import HeaderVitrine from "../vitrine/1-header-vitrine/headerVitrine"

function Livro() {
    return(
        <div className={styles.containerLivro}>
            <div className={styles.livro}>
                <HeaderVitrine
                    lista = {"false"}
                />
                <div className={styles.divImgLivro}>
                    <img src="https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg" alt="" className={styles.imgLivro}/>
                    <div>
                        <h1>Tecnologia em evidencia</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt reiciendis minus nemo natus voluptatum culpa. Sit odio asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum neque aliquid! Autem minus nemo natus voluptatum culpa. Sit odio asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum neque aliquid! Autem.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quisquam officia porro dolores</p>
                        
                        <p className={styles.preco}>Preço: R$1,90</p>
                    
                        <button data-bs-target="#exampleModalToggle" data-bs-toggle="modal">COMPRAR</button>
                    </div>
                </div>
            
                <a href="/My-personal-project/vitrine" className={styles.linkVoltar}>
                    <button>&lt; VOLTAR</button>
                </a>



                {/* MODEL BOOTSTRAP */}
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div class="modal-dialog modal-dialog-centered" id={styles.modal}>
                        <div class="modal-content">
                            <div class="modal-header" id={styles.headModel}>
                                <h1 class="modal-title fs-5" id="exampleModalToggleLabel">Modal 1</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body" id={styles.bodyModel}>
                                Show a second modal and hide this one with the button below.
                            </div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    )
} 

export default Livro