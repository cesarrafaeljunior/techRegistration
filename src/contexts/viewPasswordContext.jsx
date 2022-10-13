import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

export const passwordViewContext = createContext({});

export const PasswordView = () => {
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
      <Outlet />
    </passwordViewContext.Provider>
  );
};
