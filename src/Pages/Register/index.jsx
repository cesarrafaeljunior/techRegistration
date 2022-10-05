import { Button, Input, Label } from "../../modules/common/components";
import { Container } from "../../modules/Components/Container";
import { Form } from "../../modules/Components/Form";
import { Header } from "../../modules/Components/Header";
import { Main } from "../../modules/Components/Main";
import { SectionRegister } from "./style";

export const Register = () => {
  return (
    <SectionRegister>
      <Container>
        <Main>
          <Header>
            <Button width="80px" backColor="grey3" hover="grey2">
              Voltar
            </Button>
          </Header>
          <Form>
            <p>Crie sua conta</p>
            <span>Rapido e grátis, vamos nessa</span>
            <div className="boxLabel">
              <Label>Nome</Label>
              <Input placeholder="Digite aqui seu nome" />
            </div>
            <div className="boxLabel">
              <Label>Email</Label>
              <Input placeholder="Digite aqui seu email" />
            </div>
            <div className="boxLabel">
              <Label>Senha</Label>
              <Input placeholder="Digite aqui sua senha" />
            </div>
            <div className="boxLabel">
              <Label>Confirmar senha</Label>
              <Input placeholder="Digite novamente sua senha" />
            </div>
            <div className="boxLabel">
              <Label>Bio</Label>
              <Input placeholder="Fale sobre você" />
            </div>
            <div className="boxLabel">
              <Label>Contato</Label>
              <Input placeholder="Opções de contato" />
            </div>
            <div className="boxLabel">
              <Label>Selecionar módulo</Label>
              <Input placeholder="Primeiro Módulo" />
            </div>
            <Button
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
