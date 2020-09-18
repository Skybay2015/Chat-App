import {
   SHOW_MODAL,
   HIDE_MODAL,
   SHOW_REGISTRATION_FORM,
   SHOW_LOG_IN_FORM,
   LOG_IN_USER,
   REGISTER_USER_ERROR,
   REGISTER_USER,
   REGISTER_USER_SUCCESS,
   REGISTER_USER_START,
   REGISTER_HIDE_ALERT,
   LOG_IN_USER_SUCCESS,
   LOG_IN_TIMEOUT,
   LOG_OUT,
   LOG_OUT_SUCCEED,
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

export const registerUser = (payload) => {
   return {
      type: REGISTER_USER,
      payload,
   };
};

export const registerUserStart = () => {
   return {
      type: REGISTER_USER_START,
   };
};

export const registerUserSuccess = (payload) => {
   return {
      type: REGISTER_USER_SUCCESS,
      payload: payload.message,
   };
};

export const registerUserError = (payload) => {
   return {
      type: REGISTER_USER_ERROR,
      payload: payload,
   };
};

export const registerHideAlert = () => {
   return {
      type: REGISTER_HIDE_ALERT,
   };
};

export const logInUser = (payload) => {
   return {
      type: LOG_IN_USER,
      payload,
   };
};

export const logInUserSuccess = (payload) => {
   return {
      type: LOG_IN_USER_SUCCESS,
      payload,
   };
};

export const logOut = () => {
   return {
      type: LOG_OUT,
   };
};

export const logoutSucceed = () => {
   return {
      type: LOG_OUT_SUCCEED,
   };
};

export const checkAuthTimeout = (payload) => {
   return {
      type: LOG_IN_TIMEOUT,
      payload: payload,
   };
};
