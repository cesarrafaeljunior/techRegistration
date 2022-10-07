import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import { Button, Input, Label } from "../../modules/common/components";
import { Container } from "../../modules/Components/Container";
import { FormStyled as Form } from "../../modules/Components/Form/style";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { Api } from "../../Services";
import { SectionLogin, StyledLink as Link } from "./style";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const getValuesForm = (data) => {
    Api.post("/sessions", data)
      .then(() => {
        toast.success("Sessão Iniciada!", {
          autoClose: 1000,
          theme: "dark",
        });
        navigate("/dashboard");
      })
      .catch(({ response }) => {
        toast.error(`${response.data.message}`, {
          autoClose: 1000,
          theme: "dark",
        });
      });
  };

  return (
    <SectionLogin>
      <ToastContainer />
      <Container>
        <Main>
          <Header />
          <Form onSubmit={handleSubmit(getValuesForm)}>
            <p>Login</p>
            <div className="boxLabel">
              <Label>Email</Label>
              <Input placeholder="Digite seu email" {...register("email")} />
            </div>
            <div className="boxLabel">
              <Label>Senha</Label>
              <Input
                type="password"
                placeholder="Digite sua senha"
                {...register("password")}
              />
            </div>

            <div className="boxButtons">
              <Button
                type="submit"
                width="100%"
                backColor="colorPrimary"
                borderColor="colorPrimary"
                hover="colorPrimaryFocus"
              >
                Entrar
              </Button>
              <span>Ainda não possui uma conta?</span>
              <Link
                width="100%"
                backgroundcolor="grey1"
                bordercolor="grey1"
                hover="grey2"
                to="/register"
              >
                Cadastre-se
              </Link>
            </div>
          </Form>
        </Main>
      </Container>
    </SectionLogin>
  );
};
