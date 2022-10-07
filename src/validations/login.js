import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Email inválido")
    .required("Insira um email para prosseguir"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .required("Insira uma senha válida"),
});
