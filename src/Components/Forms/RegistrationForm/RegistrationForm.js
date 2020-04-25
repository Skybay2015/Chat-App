import React from 'react';
import { Formik, Form } from 'formik';
import { Input } from '../../Input';
import styles from '../styles.module.sass';
import { Button } from '@material-ui/core';
import ValidationSchema from './validationSchema';

const RegistrationForm = () => {
   return (
      <Formik
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
               <h2 className={styles.Title}>Регистрационная форма</h2>

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
                  placeholder='Введите Ваш никнейм *'
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
