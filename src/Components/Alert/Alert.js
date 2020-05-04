import React from 'react';
import { Alert } from '@material-ui/lab';

const AlertMain = ({ className, status, message, handleClose }) => (
   <Alert
      className={className}
      onClose={handleClose}
      variant='filled'
      severity={status}>
      {message}
   </Alert>
);

export default AlertMain;
