import React from 'react';
import { Button } from '@material-ui/core';

const ButtonMain = ({ className, children, ...otherProps }) => {
   return (
      <div className={className}>
         <Button {...otherProps}>{children}</Button>
      </div>
   );
};

export default ButtonMain;
