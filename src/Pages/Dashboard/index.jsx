import { useContext } from "react";
import { userContext } from "../../contexts/userContext";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { Techs } from "../../modules/Components/Techs";
import { StyledLink as Link } from "../Login/style";
import { SectionDashboard } from "./style";

export const Dashboard = () => {
  const { user } = useContext(userContext);

  console.log(user);
  return (
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
        <Techs className="Box__App" />
      </Main>
    </SectionDashboard>
  );
};
