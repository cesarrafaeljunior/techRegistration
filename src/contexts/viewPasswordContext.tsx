import { createContext, useState } from "react";
import { iChildrens } from "../modules/Components/Container";

interface iViewContext {
  isOpenEyes: boolean;
  inputView: string;
  openEyes: () => void;
  closeEyes: () => void;
}

export const passwordViewContext = createContext<iViewContext>(
  {} as iViewContext
);

export const PasswordView = ({ children }: iChildrens) => {
  const [isOpenEyes, setIsOpenEyes] = useState<boolean>(false);
  const [inputView, setInputView] = useState<string>("password");

  async function openEyes(): Promise<void> {
    setIsOpenEyes(!isOpenEyes);
    setInputView("text");
  }

  async function closeEyes(): Promise<void> {
    setIsOpenEyes(!isOpenEyes);
    setInputView("password");
  }

  return (
    <passwordViewContext.Provider
      value={{ isOpenEyes, inputView, openEyes, closeEyes }}
    >
      {children}
    </passwordViewContext.Provider>
  );
};
