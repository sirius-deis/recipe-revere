import { FC, PropsWithChildren } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RootLayout;
