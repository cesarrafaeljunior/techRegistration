import { ModalContainer } from "./style";
import { TitleModal } from "./TitleModal";

export const Modal = ({ children, text }) => {
  return (
    <ModalContainer>
      <div className="Modal">
        <TitleModal text={text} />
        <div className="bodyModal">{children}</div>
      </div>
    </ModalContainer>
  );
};
