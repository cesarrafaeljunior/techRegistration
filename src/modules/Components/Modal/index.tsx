import { ReactNode } from "react";
import { ModalContainer } from "./style";
import { TitleModal } from "./TitleModal";

export interface iModal {
  children?: ReactNode;
  text?: string;
}

export const Modal = ({ children, text }: iModal) => {
  return (
    <ModalContainer>
      <div className="Modal">
        <TitleModal text={text} />
        <div className="bodyModal">{children}</div>
      </div>
    </ModalContainer>
  );
};
