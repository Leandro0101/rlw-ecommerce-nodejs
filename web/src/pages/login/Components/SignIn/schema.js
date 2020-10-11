import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string().max(50).email().required('Este campo é obrigatório!'),
  password: Yup.string().min(8, 'Mínimo de 8 caracteres').required('Este campo é obrigatório!'),
});