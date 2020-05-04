import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
   email: Yup.string().required('Введите Ваш email'),
   password: Yup.string().required('Введите пароль'),
});

export default ValidationSchema;
