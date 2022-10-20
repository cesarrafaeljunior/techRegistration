import { useContext } from "react";
import { FaTrash } from "react-icons/fa";
import { SectionTechs } from "./style";

import { iTechs, userContext } from "../../../contexts/userContext";
import { Button, Input, Label, Select } from "../../common/components";
import { FormStyled as Form } from "../Form/style";
import { useForm } from "react-hook-form";
import { Modal } from "../Modal";

export const Techs = () => {
  const { isModal, setIsModal, addTechs, user, deleteTech } =
    useContext(userContext);

  const { register, handleSubmit } = useForm<iTechs>();

  return (
    <SectionTechs>
      {isModal && (
        <Modal text="Cadastrar Tecnologia">
          <Form onSubmit={handleSubmit(addTechs)}>
            <div className="box__label">
              <Label>Nome</Label>
              <Input placeholder="Tecnologia" {...register("title")} />
            </div>
            <div className="box__label">
              <Label>Selecionar status</Label>
              <Select {...register("status")}>
                <option value="iniciante">Iniciante</option>
                <option value="intermediario">Intermediario</option>
                <option value="avancado">Avançado</option>
              </Select>
            </div>
            <Button
              type="submit"
              width="100%"
              backgroundcolor="colorPrimary"
              bordercolor="colorPrimary"
              hover="colorPrimaryFocus"
            >
              Cadastrar Tecnologia
            </Button>
          </Form>
        </Modal>
      )}

      <div className="box__addTech">
        <h1>Tecnologias</h1>
        <Button
          onClick={() => setIsModal(!isModal)}
          width="32px"
          hover="grey2"
          backgroundcolor="grey3"
        >
          +
        </Button>
      </div>

      <ul>
        {user.techs.length <= 0 ? (
          <h2>Nenhuma tecnologia cadastrada</h2>
        ) : (
          user.techs.map((elem) => {
            return (
              <li key={elem.id}>
                <h2>{elem.title}</h2>
                <p>{elem.status}</p>
                <FaTrash
                  className="trash"
                  onClick={() => deleteTech(elem.id)}
                />
              </li>
            );
          })
        )}
      </ul>
    </SectionTechs>
  );
};
