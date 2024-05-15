import { FC, ReactNode } from "react";

interface CartProps {
  title: string;
  icon: ReactNode;
}

const Cart: FC<CartProps> = ({ title, icon }) => {
  return (
    <article>
      <h3>{title}</h3>
      {icon}
    </article>
  );
};

export default Cart;
