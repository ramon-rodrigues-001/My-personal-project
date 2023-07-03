import styles from "./accordion.module.scss";

export default function Accordion() {

      function active(content: string) {
        const accordionContent = document.querySelector(`#content-${content}`) as HTMLElement | null;

        accordionContent?.classList.toggle(styles.accordionContentOff)
        accordionContent?.classList.toggle(styles.accordionContentOn)

        

        if (accordionContent?.classList.contains(styles.accordionContentOff)) 
        {
            const icone = document.querySelector(`#icon${content}`) as HTMLElement | null;
            if (icone) {
                icone.style.transform = "rotate(360deg)"
                icone.style.transition = ".3s"
                icone.innerHTML = '+';
            }
        }
        else {
            const icone = document.querySelector(`#icon${content}`) as HTMLElement | null;
            if (icone) {
                icone.style.transform = "rotate(360deg)"
                icone.style.transition = ".3s"
                icone.innerHTML = '-';
            }
        }
      }

    return (
        <section className={styles.sectionAccordion}>

            <div className={styles.divAccordion}>
                <p className={styles.subTitle}>DUVIDAS</p>
                <h2 className={styles.title}>
                    Ficou com alguma dúvida?
                </h2>
                
                <div className={styles.content}>
                    <div className={styles.accordionIten}>
                        <div className={styles.accordionHeader} onClick={() => {active("1")}}>
                            <span>
                                Posso baixar os PDFs?
                            </span>
                            <div className={styles.icon} id="icon1">
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-1">
                            <p>
                                Sim você tem permição para baixar ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>
                    <div className={styles.accordionIten}>
                        <div className={styles.accordionHeader} onClick={() => {active("2")}}>
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
                </div>
            </div>
        </section>
    )
}