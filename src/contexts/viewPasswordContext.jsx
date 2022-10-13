import { createContext, useState } from "react";

export const passwordViewContext = createContext({});

export const PasswordView = ({ children }) => {
  const [isOpenEyes, setIsOpenEyes] = useState(false);
  const [inputView, setInputView] = useState("password");

  async function openEyes() {
    setIsOpenEyes(!isOpenEyes);
    setInputView("text");
  }

  async function closeEyes() {
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
