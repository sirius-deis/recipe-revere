import { FC, PropsWithChildren } from "react";
import styles from './Accordion.module.css'

interface AccordionProps {
    title: string;
}

const Accordion: FC<PropsWithChildren & AccordionProps> = ({children, title}) => {
    return <section>
        <button className={styles.accordion}>{title}</button>
        <div className={styles.panel}>
            {children}
        </div>
    </section>
}

export default Accordion;