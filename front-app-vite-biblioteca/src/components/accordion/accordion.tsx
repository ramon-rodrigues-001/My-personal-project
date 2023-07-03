import styles from "./accordion.module.scss";

export default function Accordion() {

    function active(content: string) {
        alert('hello')
        const accordionContent = document.querySelector(`#${content}`)
        accordionContent.classList.toggle("._accordionIten_1k5cq_33");
        accordionContent.classList.toggle("accordionContentOn");
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
                        <div className={styles.accordionHeader} onClick={() => {active("content-1")}}>
                            <span>
                                Posso baixar os PDFs?
                            </span>
                            <div className={styles.icon}>
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-1">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>
                    <div className={styles.accordionIten}>
                        <div className={styles.accordionHeader} onClick={() => {active("content-2")}}>
                            <span>
                                Os livros tem direitos autorais? 
                            </span>
                            <div className={styles.icon}>
                                +
                            </div>
                        </div>
                        <div className={styles.accordionContentOff} id="content-2">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}