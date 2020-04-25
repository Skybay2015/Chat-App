import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
   email: Yup.string()
      .email('Неверный email адрес')
      .required('Введите email адрес'),
   name: Yup.string()
      .min(2, 'Слишком короткий')
      .max(40, 'Слишком длинный')
      .required('Введите никнейм'),
   age: Yup.string().max(3, 'Слишком длинный'),
   city: Yup.string().min(2, 'Слишком короткий').max(40, 'Слишком длинный'),
   password: Yup.string().required('Введите пароль'),
   passwordConfirmation: Yup.string().oneOf(
      [Yup.ref('password'), null],
      'Пароли не совпадают',
   ),
});

export default ValidationSchema;
