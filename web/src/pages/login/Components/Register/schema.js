import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string().max(50).required('Este campo é obrigatório!'),
  email: Yup.string().max(50).email().required('Este campo é obrigatório!'),
  password: Yup.string().min(8, 'Mínimo de 8 caracteres').required('Este campo é obrigatório!'),
});