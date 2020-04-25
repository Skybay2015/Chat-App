import {
   SHOW_MODAL,
   HIDE_MODAL,
   SHOW_REGISTRATION_FORM,
   SHOW_LOG_IN_FORM,
} from '../types';

export const showModal = () => {
   return {
      type: SHOW_MODAL,
   };
};

export const hideModal = () => {
   return {
      type: HIDE_MODAL,
   };
};

export const showRegistrationForm = () => {
   return {
      type: SHOW_REGISTRATION_FORM,
   };
};

export const showLogInForm = () => {
   return {
      type: SHOW_LOG_IN_FORM,
   };
};
