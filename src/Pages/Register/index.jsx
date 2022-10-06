import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/register";

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
import { StyledLink } from "../Login/style";

export const Register = () => {
  //Navigate => Utilizado para mudar a rota
  const navigate = useNavigate();

  const {
    register, //Função que monta o objeto com base em seu name
    handleSubmit, //Função chamada no onSubmit do form recebendo uma callBack
    formState: { errors }, // Desestruturação para captar as mensagens de erro
    reset, //Função para resetar os campos do formulário
  } = useForm({
    resolver: yupResolver(schema), //Validador de campos
  });
  //Função acionada pelo onSubmit do formulário
  const getValuesForm = (data) => {
    reset(); //Chamando a função que reseta os campos
    // Api.post("/users", data)
    //   .then(({ data }) => console.log(data))
    //   .catch((err) => console.log(err));
  };

  return (
    <SectionRegister>
      <Container>
        <Main>
          <Header>
            <StyledLink
              width="80px"
              backColor="grey3"
              hover="grey2"
              to="/login"
            >
              Voltar
            </StyledLink>
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
                type="password"
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
              <p className="errorMessage">{errors.password?.message}</p>
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
              borderColor="colorPrimaryNegative"
              backColor="colorPrimaryNegative"
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
