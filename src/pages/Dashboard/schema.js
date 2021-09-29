import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().trim().required("Tecnologia é obrigatória"),
  status: yup.string().trim().required("Nível é obrigatório"),
});

export default schema;
