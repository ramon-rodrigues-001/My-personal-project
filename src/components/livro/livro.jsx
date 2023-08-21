import React, { useState } from "react";
import styles from "./livro.module.scss";
import HeaderVitrine from "../vitrine/1-header-vitrine/headerVitrine";

function Livro() {
  const [showModal, setShowModal] = useState(false);
  const [copy, setCopy] = useState(false);


  // ABRIR E FECHAR MODAL
  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
  };

  // COPIAR CHAVE PIX
  const copiaChave = () => {
    setCopy(true);
    navigator.clipboard.writeText("ramon.rodrigues.dev@gmail.com");
    setTimeout(() => setCopy(false), 1500);
  };



  return (
    <div className={styles.containerLivro}>
      <div className={styles.livro}>
        <HeaderVitrine lista="false" />

        {/* DESCRIÇÃO DO LIVRO */}
        <div className={styles.divImgLivro}>
          <img
            src="https://lirp.cdn-website.com/4deba6da/dms3rep/multi/opt/fullsize-2018-01-09-18-Peca-Grafica-230330_470658_181301872_308451081-1e8eebeb-640w.jpg"
            alt=""
            className={styles.imgLivro}
          />
          <div>
            <h1>Tecnologia em evidência</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Incidunt reiciendis minus nemo natus voluptatum culpa. Sit odio
              asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum
              neque aliquid! Autem minus nemo natus voluptatum culpa. Sit odio
              asperiores aut, fuga, iste minima assumenda ut ad, veniam rerum
              neque aliquid! Autem.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              quisquam officia porro dolores.
            </p>
            <p className={styles.preco}>Preço: R$1,90</p>
            <button onClick={openModal}>COMPRAR</button>
          </div>
        </div>

        <a href="/My-personal-project/vitrine" className={styles.linkVoltar}>
          <button>&lt; VOLTAR</button>
        </a>



        {/* MODAL DE PAGAMENTOS */}
        {showModal && (
          <div className={styles.divModal} id="modelPagamento">
            <div className={styles.container}>
              <div className={styles.headModal}>
                <h1>Pagamento</h1> <hr />
              </div>
              <div className={styles.bodyModal}>
                <div className={styles.divQRCODE}>
                  <p>
                    <strong>Pagamento via pix:</strong>
                  </p>
                  <img
                    src="https://media.geeksforgeeks.org/wp-content/uploads/20210106102323/MyQRCode1-300x300.png"
                    alt="QR CODE"
                  />
                </div>
                <div>
                  <h2>
                    <strong>Informações:</strong>
                  </h2>
                  <p>
                    Nome Destinatorio: Ramon Rodrigues Cordeiro <br />
                    Banco Destinatorio: Bradesco <br />
                    CPF Destinatorio: ***656***-00
                  </p>
                  <h3>Chave Pix: Email</h3>
                  <button onClick={copiaChave} id="btnCopy">
                    {copy ? "Copied!" : "Copiar Chave."}
                  </button>
                  {copy && <p>Chave email copiado!</p>}
                </div>
              </div>
              <div className={styles.footerModal}>
                <button onClick={closeModal}>OK</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Livro;












