import * as yup from "yup";

export const schemaSignIn = yup.object().shape({
    email: yup
      .string()
      .email('Email precisar ser válido') 
      .required('Email é obrigatório'), 
    password: yup
      .string()
      .required('Senha é obrigatório'), 
  });
  