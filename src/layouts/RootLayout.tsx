import { FC, useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { UserContext } from "../store/userContext";

const RootLayout: FC = () => {
  const navigate = useNavigate();
  let { token } = useContext(UserContext);

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

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
