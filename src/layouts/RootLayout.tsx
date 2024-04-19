import { FC } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";

const RootLayout: FC = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
  }
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
