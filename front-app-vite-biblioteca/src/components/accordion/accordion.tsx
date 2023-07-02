import styles from "./accordion.module.scss"

export default function Accordion() {
    return (
        <section className={styles.sectionAccordion}>

            <p className={styles.subTitle}>DUVIDAS</p>
            
            <div className={styles.content}>
                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader}>
                        <span>
                            ITEM _ 1
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContent}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>


                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader}>
                        <span>
                            ITEM _ 2
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContent}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>


                <div className={styles.accordionIten}>
                    <div className={styles.accordionHeader}>
                        <span>
                            ITEM _ 3
                        </span>
                        <div className={styles.icon}>
                            +
                        </div>
                    </div>
                    <div className={styles.accordionContent}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis error est qui dolores dolor, ullam non dolorem quis. Minima officiis enim ea, unde odio consequatur magni fuga libero repudiandae.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}