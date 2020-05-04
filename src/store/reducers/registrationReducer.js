import {
   REGISTER_USER_ERROR,
   REGISTER_USER_SUCCESS,
   REGISTER_HIDE_ALERT,
} from '../types';

const initialState = {
   message: '',
   showAlert: false,
   status: null,
};

export default (state = initialState, action) => {
   switch (action.type) {
      case REGISTER_USER_ERROR:
         return {
            ...state,
            message: action.payload,
            showAlert: true,
            status: 'error',
         };

      case REGISTER_USER_SUCCESS:
         return {
            ...state,
            message: action.payload,
            showAlert: true,
            status: 'success',
         };

      case REGISTER_HIDE_ALERT:
         return {
            ...state,
            showAlert: false,
         };

      default:
         return state;
   }
};
