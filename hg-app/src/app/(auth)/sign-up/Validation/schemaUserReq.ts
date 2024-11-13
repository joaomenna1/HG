import * as yup from "yup";

export const schemaUserReq = yup.object().shape({
  name: yup.string().required("Por favor insira o nome."),
  email: yup
    .string()
    .email("Por favor, precisamos de um email válido.")
    .required("Email é obrigatório."),
  password: yup
    .string()
    .required("Por favor digite a sua senha")
    .min(5, "A senha deve ter no máximo 5 caracteres."),
});
