import { FC, PropsWithChildren, useState } from "react";
import styles from "./Accordion.module.css";

interface AccordionProps {
  title: string;
}

const Accordion: FC<PropsWithChildren & AccordionProps> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const clickHandler = () => {
    setIsOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <section
      className={`${isOpen ? styles.active : ""}`}
      onClick={clickHandler}
    >
      <button className={styles.accordion}>{title}</button>
      <div className={styles.panel}>{children}</div>
    </section>
  );
};

export default Accordion;
