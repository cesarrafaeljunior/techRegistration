import { useNavigate } from "react-router-dom";
import { Button, Input, Label } from "../../modules/common/components";
import { Container } from "../../modules/Components/Container";
import { FormStyled } from "../../modules/Components/Form/style";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { SectionLogin } from "./style";

export const Login = () => {
  const navigate = useNavigate();

  return (
    <SectionLogin>
      <Container>
        <Main>
          <Header />
          <FormStyled>
            <p>Login</p>
            <div className="boxLabel">
              <Label>Email</Label>
              <Input placeholder="Digite seu email" />
            </div>
            <div className="boxLabel">
              <Label>Senha</Label>
              <Input placeholder="Digite sua senha" />
            </div>

            <div className="boxButtons">
              <Button
                width="100%"
                backColor="colorPrimary"
                borderColor="colorPrimary"
                hover="colorPrimaryFocus"
              >
                Entrar
              </Button>
              <span>Ainda não possui uma conta?</span>
              <Button
                onClick={() => navigate("/register")}
                width="100%"
                backColor="grey1"
                borderColor="grey1"
                hover="grey2"
              >
                Cadastre-se
              </Button>
            </div>
          </FormStyled>
        </Main>
      </Container>
    </SectionLogin>
  );
};
