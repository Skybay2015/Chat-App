import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form } from 'formik';
import { Button } from '@material-ui/core';
import { Input } from '../../Input';
import styles from '../styles.module.sass';
import ValidationSchema from './validationSchema';
import { logInUser } from '../../../store/actions/actionCreators';
import { Alert } from '../../Alert';

const LogInForm = () => {
   const dispatch = useDispatch();
   return (
      <Formik
         onSubmit={(values, { resetForm, _, setSubmitting }) => {
            dispatch(
               logInUser({
                  url: 'http://localhost:8000/api/getUser',
                  ...values,
                  resetForm,
                  setSubmitting,
               }),
            );
         }}
         validationSchema={ValidationSchema}
         initialValues={{
            email: '',
            password: '',
         }}>
         {({ isSubmitting }) => (
            <Form className={styles.Form}>
               <h2 className={styles.Title}>Вход</h2>

               <Input
                  className={styles.Input}
                  type='email'
                  name='email'
                  placeholder='Введите Ваш Email'
               />

               <Input
                  className={styles.Input}
                  type='password'
                  name='password'
                  placeholder='Введите Ваш пароль'
               />

               <Button
                  color='secondary'
                  variant='contained'
                  disabled={isSubmitting}
                  type='submit'>
                  Войти
               </Button>
            </Form>
         )}
      </Formik>
   );
};

export default LogInForm;
