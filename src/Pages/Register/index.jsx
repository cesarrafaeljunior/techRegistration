import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BsFillEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";

import { Api } from "../../Services";

import {
  Button,
  Input,
  Label,
  TextArea,
  Select,
} from "../../modules/common/components";
import { Container } from "../../modules/Components/Container";
import { FormStyled as Form } from "../../modules/Components/Form/style";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { SectionRegister } from "./style";
import { StyledLink as Link } from "../Login/style";
import { schema } from "../../validations/register";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Register = () => {
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

  const getValuesForm = (data) => {
    reset();
    Api.post("/users", data)
      .then(() => {
        toast.success("Usuario cadastrado com sucesso!", {
          autoClose: 1000,
          theme: "dark",
        });
        navigate("/login");
      })
      .catch(({ response }) => {
        toast.error(`${response.data.message}`, {
          autoClose: 1000,
          theme: "dark",
        });
      });
  };

  return (
    <SectionRegister>
      <ToastContainer />
      <Container>
        <Main>
          <Header>
            <Link
              to="/login"
              width="80px"
              hover="grey2"
              backgroundcolor="grey3"
            >
              Voltar
            </Link>
          </Header>
          <Form onSubmit={handleSubmit(getValuesForm)}>
            <p>Crie sua conta</p>
            <span>Rapido e grátis, vamos nessa</span>
            <div className="boxLabel">
              <Label>Nome</Label>
              <Input
                type="text"
                placeholder="Digite aqui seu nome"
                {...register("name")}
              />

              <p className="errorMessage">{errors.name?.message}</p>
            </div>
            <div className="boxLabel">
              <Label>Email</Label>
              <Input
                type="text"
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
              <p className="errorMessage">{errors.email?.message}</p>
            </div>
            <div className="boxLabel">
              <Label>Senha</Label>
              <Input
                type={inputView}
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <p className="errorMessage">{errors.password?.message}</p>
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
            </div>
            <div className="boxLabel">
              <Label>Confirmar senha</Label>
              <Input
                type="password"
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
              <p className="errorMessage">{errors.confirmPassword?.message}</p>
            </div>
            <div className="boxLabel">
              <Label>Bio</Label>
              <TextArea placeholder="Fale sobre você" {...register("bio")} />
            </div>
            <p className="errorMessage">{errors.bio?.message}</p>
            <div className="boxLabel">
              <Label>Contato</Label>
              <Input placeholder="Opções de contato" {...register("contact")} />
            </div>
            <p className="errorMessage">{errors.contact?.message}</p>
            <div className="boxLabel">
              <Label>Selecionar módulo</Label>
              <Select {...register("course_module")}>
                <option value="">Selecione o Módulo</option>
                <option value="Primero Módulo (FrontEnd Básico)">
                  Módulo 1
                </option>
                <option value="Segundo Módulo (FrontEnd Intermediario)">
                  Módulo 2
                </option>
                <option value="Terceiro Módulo (FrontEnd Avançado)">
                  Módulo 3
                </option>
                <option value="Quarto Módulo (Backend Básico)">Módulo 4</option>
                <option value="Quinto Módulo (Backend Intermediario)">
                  Módulo 5
                </option>
                <option value="Sexto Módulo (Backend Avançado)">
                  Módulo 6
                </option>
              </Select>
            </div>
            <p className="errorMessage">{errors.course_module?.message}</p>
            <Button
              type="submit"
              bordercolor="colorPrimaryNegative"
              backgroundcolor="colorPrimaryNegative"
              hover="colorPrimaryFocus"
            >
              Cadastrar
            </Button>
          </Form>
        </Main>
      </Container>
    </SectionRegister>
  );
};
