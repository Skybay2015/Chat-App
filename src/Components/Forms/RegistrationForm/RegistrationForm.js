import React from 'react';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Input } from '../../Input';
import styles from '../styles.module.sass';
import ValidationSchema from './validationSchema';
import {
   registerUser,
   registerHideAlert,
} from '../../../store/actions/actionCreators';
import { Alert } from '../../Alert';

const RegistrationForm = () => {
   const dispatch = useDispatch();
   const showAlert = useSelector((state) => state.registration.showAlert);
   const message = useSelector((state) => state.registration.message);
   const status = useSelector((state) => state.registration.status);
   return (
      <Formik
         onSubmit={(
            { email, name, age, city, password },
            { resetForm, _, setSubmitting },
         ) => {
            dispatch(
               registerUser({
                  url: 'http://localhost:8000/api/addUser',
                  email,
                  name,
                  age,
                  city,
                  password,
                  resetForm,
                  setSubmitting,
               }),
            );
         }}
         validationSchema={ValidationSchema}
         initialValues={{
            email: '',
            name: '',
            age: '',
            city: '',
            password: '',
            passwordConfirmation: '',
         }}>
         {({ isSubmitting }) => (
            <Form className={styles.Form}>
               <h2 className={styles.Title}>Регистрация</h2>

               {showAlert && (
                  <Alert
                     className={styles.Alert}
                     handleClose={() => dispatch(registerHideAlert())}
                     status={status}
                     message={message}
                  />
               )}

               <Input
                  className={styles.Input}
                  type='email'
                  name='email'
                  placeholder='Введите Ваш Email *'
               />

               <Input
                  className={styles.Input}
                  type='text'
                  name='name'
                  placeholder='Введите Ваше имя *'
               />

               <Input
                  className={styles.Input}
                  type='text'
                  name='age'
                  placeholder='Введите Ваш возраст'
               />

               <Input
                  className={styles.Input}
                  type='text'
                  name='city'
                  placeholder='Введите Ваш город'
               />

               <Input
                  className={styles.Input}
                  type='password'
                  name='password'
                  placeholder='Введите Ваш пароль *'
               />

               <Input
                  className={styles.Input}
                  type='password'
                  name='passwordConfirmation'
                  placeholder='Введите Ваш пароль еще раз *'
               />

               <Button
                  color='secondary'
                  variant='contained'
                  disabled={isSubmitting}
                  type='submit'>
                  Зарегистрироваться
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default RegistrationForm;
