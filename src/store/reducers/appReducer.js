import {
   SHOW_MODAL,
   HIDE_MODAL,
   SHOW_REGISTRATION_FORM,
   SHOW_LOG_IN_FORM,
} from '../types';

const initialState = {
   isLoggedIn: false,
   isModalOpen: false,
   isRegistrationForm: true,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case SHOW_MODAL:
         return {
            ...state,
            isModalOpen: true,
         };

      case HIDE_MODAL:
         return {
            ...state,
            isModalOpen: false,
         };

      case SHOW_REGISTRATION_FORM:
         return {
            ...state,
            isRegistrationForm: true,
         };

      case SHOW_LOG_IN_FORM:
         return {
            ...state,
            isRegistrationForm: false,
         };

      default:
         return state;
   }
};
