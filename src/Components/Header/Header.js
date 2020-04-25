import React from 'react';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { useSelector, useDispatch } from 'react-redux';
import styles from './styles.module.sass';
import { Button } from '../Button';
import { Wrapper } from '../Wrapper';
import {
   showRegistrationForm,
   showLogInForm,
} from '../../store/actions/actionCreators';

const Header = () => {
   const dispatch = useDispatch();
   const isLoggedIn = useSelector((state) => state.app.isLoggedIn);

   return (
      <div>
         <AppBar position='static'>
            <Wrapper>
               <Toolbar className={styles.Header_content}>
                  <h6 className={styles.Header_title}>Chat App</h6>

                  {isLoggedIn && (
                     <div>
                        <IconButton color='inherit'>
                           <Badge color='secondary'>
                              <MailIcon />
                           </Badge>
                        </IconButton>

                        <IconButton
                           edge='end'
                           aria-label='account of current user'
                           aria-haspopup='true'
                           color='inherit'></IconButton>
                     </div>
                  )}

                  <Button
                     color='secondary'
                     variant='contained'
                     className={styles.Header_item}
                     onClick={() => dispatch(showLogInForm())}>
                     Войти
                  </Button>
                  <Button
                     color='secondary'
                     variant='contained'
                     className={styles.Header_item}
                     onClick={() => dispatch(showRegistrationForm())}>
                     Регистрация
                  </Button>
               </Toolbar>
            </Wrapper>
         </AppBar>
      </div>
   );
};

export default Header;
