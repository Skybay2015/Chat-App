import {
   SHOW_MODAL,
   HIDE_MODAL,
   SHOW_REGISTRATION_FORM,
   SHOW_LOG_IN_FORM,
   LOG_IN_USER,
   REGISTER_USER_ERROR,
   LOG_IN_USER_SUCCESS,
   LOG_OUT_SUCCEED,
} from '../types';

const initialState = {
   isLoggedIn: false,
   isModalOpen: false,
   isRegistrationForm: true,
   user: null,
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

      case LOG_IN_USER_SUCCESS:
         console.log(action);
         return {
            ...state,
            isLoggedIn: true,
            user: { ...action.payload.user },
         };

      case REGISTER_USER_ERROR:
         return {
            ...state,
            error: action.payload,
         };

      case LOG_OUT_SUCCEED:
         return {
            ...state,
            user: null,
            isLoggedIn: false,
         };

      default:
         return state;
   }
};
