import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("O campo de nome é obrigatório"),
  email: yup
    .string()
    .email("O email inserido é inválido")
    .required("O campo de email é obrigatório"),
  password: yup
    .string()
    .min(8, "A senha deve conter no mínimo 8 caracteres")
    .matches(
      /([0-9])/,
      "Sua senha deve conter ao menos um número e um caractere especial"
    )
    .matches(
      /((?=.*[@!#$%^&*()/\\]))/,
      "Sua senha deve conter ao menos um caractere especial. ex: @!#$%^&*"
    )
    .required("O campo de senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf(["password"], "")
    .required("As senhas nao se condizem"),
  bio: yup
    .string()
    .max(200, "A biografia deve contar no máximo 200 caracteres")
    .required("O campo de biografia é obrigatório"),
  contact: yup.string().required("O campo de contato é obrigatório"),
  course_module: yup.string().required("O campo de módulo é obrigatório"),
});
