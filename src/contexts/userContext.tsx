import React, {
  createContext,
  Dispatch,
  useEffect,
  useState,
  SetStateAction,
} from "react";
import { FieldValues } from "react-hook-form";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { iChildrens } from "../modules/Components/Container";
import { Api } from "../Services";

export interface iTechs {
  id: string;
  title: string;
  status: string;
}

export interface iUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio: string;
  contact: string;
  course_module: string;
  techs: iTechs[];
}

export interface iUserContext {
  registerUser: (data: FieldValues) => void;
  loginUser: (data: FieldValues) => void;
  user: iUser;
  loading: boolean;
  navigate: NavigateFunction;
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  addTechs: (data: iTechs) => void;
  deleteTech: (id: string) => void;
}

export const userContext = createContext<iUserContext>({} as iUserContext);

export const UserProvider = ({ children }: iChildrens) => {
  const [isReload, setReloado] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [user, setUser] = useState<iUser>({} as iUser);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loading() {
      const token = localStorage.getItem("@KenzieHub:token");

      if (token) {
        try {
          Api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await Api.get("/profile");
          setUser(data);
        } catch (error) {
          console.log(error);
        }
      }
      setLoading(false);
    }

    loading();
  }, [isReload]);

  async function registerUser(data: FieldValues): Promise<void> {
    try {
      await Api.post("/users", data);
      toast.success("Usuario cadastrado com sucesso!", {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
      navigate("/login");
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
    }
  }

  async function loginUser(data: FieldValues): Promise<void> {
    try {
      toast.success("Sessão Iniciada!", {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
      const response = await Api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      Api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);

      localStorage.clear();
      localStorage.setItem("@KenzieHub:token", token);

      navigate(`/dashboard`, { replace: true });
    } catch (error) {
      toast.error(`${error}`, {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
    }
  }

  async function addTechs(body: iTechs): Promise<void> {
    try {
      await Api.post("/users/techs", body);
      toast.success("Tecnologia adicionada!", {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
      setReloado(!isReload);
      setIsModal(!isModal);
    } catch (error) {
      toast.error("Tecnologia já adicionada!", {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
    }
  }

  const deleteTech = async (id: string): Promise<void> => {
    try {
      toast.success("Tecnologia Deletada!", {
        autoClose: 1000,
        theme: "dark",
        position: "bottom-center",
      });
      await Api.delete(`/users/techs/${id}`);
      setReloado(!isReload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <userContext.Provider
      value={{
        registerUser,
        loginUser,
        user,
        loading,
        navigate,
        isModal,
        setIsModal,
        addTechs,
        deleteTech,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
