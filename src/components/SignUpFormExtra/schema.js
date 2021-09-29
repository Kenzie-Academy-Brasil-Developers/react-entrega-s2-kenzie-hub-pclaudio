import * as yup from "yup";

const schema = yup.object().shape({
  bio: yup.string().trim().required("Bio é obrigatório"),
  contact: yup.string().trim().required("Contato é obrigatório"),
  course_module: yup.string().trim().required("Módulo é obrigatório"),
});

export default schema;
