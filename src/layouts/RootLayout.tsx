import { FC, useContext, useEffect } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet, useNavigate } from "react-router-dom";
import { getToken, deleteToken } from "../utils/store";
import { UserContext } from "../store/userContext";
import { useQuery } from "@apollo/client";
import { ME } from "../queries/queries";


const RootLayout: FC = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext)
  let token = getToken();
  useQuery(ME, {
    skip: !!user,
    onError: () => {
      deleteToken();
      navigate("/login")
    }
  })

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Header />
      <main className="main mt-1 d-flex g-1">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
