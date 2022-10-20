import { useContext } from "react";
import { HiX } from "react-icons/hi";
import { iModal } from "..";
import { userContext } from "../../../../contexts/userContext";

import { TitleContainer } from "./style";

export const TitleModal = ({ text }: iModal) => {
  const { setIsModal } = useContext(userContext);

  return (
    <TitleContainer>
      <p>{text}</p>
      <HiX
        onClick={() => {
          setIsModal(false);
        }}
        className="closeBtn"
      />
    </TitleContainer>
  );
};
