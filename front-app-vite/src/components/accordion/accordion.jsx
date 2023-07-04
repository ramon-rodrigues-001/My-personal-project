import styles from "./accordion.module.scss";

export default function Accordion() {

      function active(content) {
        const accordionContent = document.querySelector(`#content-${content}`);

        accordionContent?.classList.toggle(styles.accordionContentOff)
        accordionContent?.classList.toggle(styles.accordionContentOn)

        
        const icone = document.querySelector(`#icon${content}`);

        
        if (accordionContent?.classList.contains(styles.accordionContentOff)) {
            icone.style.transform = "rotate(0deg)";
            icone.style.transition = ".3s";
            icone.innerHTML = "+";
            
        } else {
            icone.style.transform = "rotate(180deg)";
            icone.style.transition = ".3s";
            icone.innerHTML = "-";
        }
    }



    return (
        <section className={styles.sectionAccordion} id="ancoraDuvidas">

            <div className={styles.divAccordion}>
                <p className={styles.subTitle}>DUVIDAS</p>
                <h2 className={styles.title}>
                    Ficou com alguma dúvida?
                </h2>
                
                <div className={styles.content}>


                    <div className={styles.accordionIten} onClick={() => {active("1")}}>
                        <div className={styles.accordionHeader} >
                            <span>
                                Posso baixar os PDFs?
                            </span>
                            <div className={styles.icon} id="icon1">
                                -
                            </div>
                        </div>
                        <div className={styles.accordionContentOn} id="content-1">
                            <p>
                                Sim você tem permição para baixar ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>



                    <div className={styles.accordionIten} onClick={() => {active("2")}}>
                        <div className={styles.accordionHeader}>
                            <span>
                                Os livros tem direitos autorais? 
                            </span>
                            <div className={styles.icon}  id="icon2">
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-2">
                            <p>
                                Não, todos o livros e DPFs tiverem seus direitos autorais perdidos, agora e de direito do estado ipsum dolor. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>


                    <div className={styles.accordionIten} onClick={() => {active("3")}}>
                        <div className={styles.accordionHeader}>
                            <span>
                                É tudo gratuito? 
                            </span>
                            <div className={styles.icon}  id="icon3">
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-3">
                            <p>
                                Sim, todos o livros e DPFs são Gratuitos seus direitos autorais perdidos, agora e de direito do estado ipsum dolor. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>


                    <div className={styles.accordionIten} onClick={() => {active("4")}}>
                        <div className={styles.accordionHeader}>
                            <span>
                                Posso Vender os PDFs e livros?
                            </span>
                            <div className={styles.icon}  id="icon4">
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-4">
                            <p>
                                Não, todos o livros e DPFs tiverem seus direitos autorais perdidos, agora e de direito do estado ipsum dolor. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>



                    <div className={styles.accordionIten} onClick={() => {active("5")}}>
                        <div className={styles.accordionHeader}>
                            <span>
                                Os livros tem direitos autorais? 
                            </span>
                            <div className={styles.icon}  id="icon5">
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-5">
                            <p>
                                Não, todos o livros e DPFs tiverem seus direitos autorais perdidos, agora e de direito do estado ipsum dolor. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>


                    <div className={styles.accordionIten} onClick={() => {active("6")}}>
                        <div className={styles.accordionHeader}>
                            <span>
                                Os livros em PDF? 
                            </span>
                            <div className={styles.icon}  id="icon6">
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-6">
                            <p>
                                Não, todos o livros e DPFs tiverem seus direitos autorais perdidos, agora e de direito do estado ipsum dolor. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}