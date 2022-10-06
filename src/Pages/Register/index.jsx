import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

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

const schema = yup.object({
  name: yup.string("Nome obrigatório").required(),
  email: yup
    .string("Email obrigatório")
    .email("Email invalido")
    .required("Email obrigatório"),
});

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
    Api.post("/users", data)
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <SectionRegister>
      <Container>
        <Main>
          <Header>
            <Button
              onClick={() => navigate("/")}
              width="80px"
              backColor="grey3"
              hover="grey2"
            >
              Voltar
            </Button>
          </Header>
          <Form onSubmit={handleSubmit(getValuesForm)}>
            <p>Crie sua conta</p>
            <span>Rapido e grátis, vamos nessa</span>
            <div className="boxLabel">
              <Label>Nome</Label>
              <Input placeholder="Digite aqui seu nome" {...register("name")} />
            </div>
            <div className="boxLabel">
              <Label>Email</Label>
              <Input
                placeholder="Digite aqui seu email"
                {...register("email")}
              />
            </div>
            <div className="boxLabel">
              <Label>Senha</Label>
              <Input
                placeholder="Digite aqui sua senha"
                {...register("password")}
              />
            </div>
            <div className="boxLabel">
              <Label>Confirmar senha</Label>
              <Input
                placeholder="Digite novamente sua senha"
                {...register("confirmPassword")}
              />
            </div>
            <div className="boxLabel">
              <Label>Bio</Label>
              <TextArea placeholder="Fale sobre você" {...register("bio")} />
            </div>
            <div className="boxLabel">
              <Label>Contato</Label>
              <Input placeholder="Opções de contato" {...register("contact")} />
            </div>
            <div className="boxLabel">
              <Label>Selecionar módulo</Label>
              <Select {...register("course_module")}>
                <option value="">Selecione o Módulo</option>
                <option value="M1">Módulo 1</option>
                <option value="M2">Módulo 2</option>
                <option value="M3">Módulo 3</option>
                <option value="M4">Módulo 4</option>
                <option value="M5">Módulo 5</option>
                <option value="M6">Módulo 6</option>
              </Select>
            </div>
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
