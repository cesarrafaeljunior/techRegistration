import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

import { Button, Input, Label } from "../../modules/common/components";
import { Container } from "../../modules/Components/Container";
import { FormStyled as Form } from "../../modules/Components/Form/style";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { Api } from "../../Services";
import { SectionLogin, StyledLink as Link } from "./style";
import { schema } from "../../validations/login";

export const Login = () => {
  const [isOpenEyes, setIsOpenEyes] = useState(false);
  const [inputView, setInputView] = useState("password");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },

    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");
    const id = localStorage.getItem("@KenzieHub:id");

    if (token) {
      navigate(`/dashboard/user/${id}`);
    }
  }, []);

  const getValuesForm = (data) => {
    Api.post("/sessions", data)
      .then((res) => {
        toast.success("Sessão Iniciada!", {
          autoClose: 1000,
          theme: "dark",
        });
        window.localStorage.clear();
        window.localStorage.setItem("@KenzieHub:token", res.data.token);
        window.localStorage.setItem("@KenzieHub:id", res.data.user.id);
        navigate(`/dashboard/user/${res.data.user.id}`);
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
                <BsEyeSlashFill
                  onClick={() => {
                    setIsOpenEyes(!isOpenEyes);
                    setInputView("text");
                  }}
                  className="eye"
                />
              ) : (
                <BsFillEyeFill
                  onClick={() => {
                    setIsOpenEyes(!isOpenEyes);
                    setInputView("password");
                  }}
                  className="eye"
                />
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
