import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Api } from "../Services";

export const userContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
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
  }, []);

  async function registerUser(data) {
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

  async function loginUser(data) {
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

  return (
    <userContext.Provider
      value={{ registerUser, loginUser, user, loading, navigate }}
    >
      {children}
    </userContext.Provider>
  );
};
