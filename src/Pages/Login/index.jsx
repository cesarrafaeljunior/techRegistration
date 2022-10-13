import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";

import { Button, Input, Label } from "../../modules/common/components";
import { Container } from "../../modules/Components/Container";
import { FormStyled as Form } from "../../modules/Components/Form/style";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { SectionLogin, StyledLink as Link } from "./style";
import { schema } from "../../validations/login";

import { userContext } from "../../contexts/userContext";
import { passwordViewContext } from "../../contexts/viewPasswordContext";

export const Login = () => {
  const { isOpenEyes, inputView, openEyes, closeEyes } =
    useContext(passwordViewContext);
  const { loginUser, navigate } = useContext(userContext);

  useEffect(() => {
    function verifyToken() {
      const token = localStorage.getItem("@KenzieHub:token");
      if (token) {
        navigate(`/dashboard`, { replace: true });
      }
    }

    verifyToken();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <SectionLogin>
      <Container>
        <Main>
          <Header />
          <Form onSubmit={handleSubmit(loginUser)}>
            <p>Login</p>
            <div className="boxLabel">
              <Label>Email</Label>
              <Input placeholder="Digite seu email" {...register("email")} />
              <p className="errorMessage">{errors.email?.message}</p>
            </div>
            <div className="boxLabel">
              <Label>Senha</Label>
              <Input
                type={inputView}
                placeholder="Digite sua senha"
                {...register("password")}
              />
              {isOpenEyes == false ? (
                <BsEyeSlashFill onClick={openEyes} className="eye" />
              ) : (
                <BsFillEyeFill onClick={closeEyes} className="eye" />
              )}
              <p className="errorMessage">{errors.password?.message}</p>
            </div>

            <div className="boxButtons">
              <Button
                type="submit"
                width="100%"
                backgroundcolor="colorPrimary"
                bordercolor="colorPrimary"
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
