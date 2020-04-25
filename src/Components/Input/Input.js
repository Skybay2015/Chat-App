import React from 'react';
import { Input } from '@material-ui/core';
import { Field, ErrorMessage } from 'formik';
import styles from './styles.module.sass';

const InputComponent = ({ className, name, ...props }) => {
   return (
      <>
         <ErrorMessage name={name}>
            {(msg) => <span className={styles.ErrorMessage}>{msg}</span>}
         </ErrorMessage>
         <Field name={name} {...props}>
            {({ field }) => (
               <Input className={className} {...field} {...props} />
            )}
         </Field>
      </>
   );
};

export default InputComponent;
