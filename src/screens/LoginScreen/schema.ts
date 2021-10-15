import * as yup from 'yup';

export default yup
    .object()
    .shape({
        email: yup.string().email('E-mail inválido').required('Campo obrigatório'),
        password: yup.string().required('Campo obrigatório'),
    })
    .required();
