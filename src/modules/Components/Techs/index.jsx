import { Button } from "../../common/components";
import { SectionTechs } from "./style";
import { VscTrash } from "react-icons/vsc";

export const Techs = ({ children }) => {
  return (
    <SectionTechs>
      <div className="box__addTech">
        <h1>Tecnologias</h1>
        <Button width="32px" hover="grey2" backgroundcolor="grey3">
          +
        </Button>
      </div>

      <ul>
        <li>
          <h2>React JS</h2>
          <p>Intermediário</p>
          <VscTrash className="trash" />
        </li>
        <li>
          <h2>React JS</h2>
          <p>Intermediário</p>
          <VscTrash className="trash" />
        </li>
      </ul>
    </SectionTechs>
  );
};
