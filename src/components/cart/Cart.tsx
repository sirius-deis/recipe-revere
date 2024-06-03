import { FC, ReactNode } from "react";
import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import Panel from "../panel/Panel";

interface CartProps {
  title: string;
  icon: ReactNode;
  url: string;
}

const Cart: FC<CartProps> = ({ title, icon, url }) => {
  return (
    <Link to={url}>
      <Panel style={{ backgroundColor: `var(--additional-200)` }}>
        <div data-testid="icon" className={styles.icon}>
          {icon}
        </div>
        <h3 className={styles.title}>{title}</h3>
      </Panel>
    </Link>
  );
};

export default Cart;
