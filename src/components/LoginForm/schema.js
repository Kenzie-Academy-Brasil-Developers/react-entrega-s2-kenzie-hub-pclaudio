import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("E-mail é obrigatório")
    .email("Não é um e-mail válido"),
  password: yup.string().trim().required("Senha é obrigatória"),
});

export default schema;
