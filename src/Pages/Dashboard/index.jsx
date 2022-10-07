import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { Api } from "../../Services";

import { StyledLink as Link } from "../Login/style";
import { SectionDashboard } from "./style";

export const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    Api.defaults.headers.authorization = `Bearer ${token}`;

    if (!token) {
      navigate("/login");
    }

    Api.get("/profile")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <SectionDashboard>
        <Header>
          <Link
            onClick={() => {
              window.localStorage.removeItem("@KenzieHub:token");
              window.localStorage.removeItem("@KenzieHub:id");
            }}
            to="/login"
            width="80px"
            hover="grey2"
            backgroundcolor="grey3"
          >
            Sair
          </Link>
        </Header>

        <Main>
          <div className="Box__User">
            <h2>Olá, {user.name}</h2>
            <span>{user.course_module}</span>
          </div>
          <div className="Box__App">
            <p>Que pena! Estamos em desenvolvimento :(</p>
            <p>
              Nossa aplicção está em desenvolvimento, em breve teremos novidades
            </p>
          </div>
        </Main>
      </SectionDashboard>
    </>
  );
};
