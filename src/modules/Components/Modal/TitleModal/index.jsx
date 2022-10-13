import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { userContext } from "../../../../contexts/userContext";

import { TitleContainer } from "./style";

export const TitleModal = ({ text }) => {
  const { setIsModal, setIsModalEdit } = useContext(userContext);

  return (
    <TitleContainer>
      <p>{text}</p>
      <HiX
        onClick={() => {
          setIsModal(false);
          setIsModalEdit(false);
        }}
        className="closeBtn"
      />
    </TitleContainer>
  );
};
