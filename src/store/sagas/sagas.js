import { put, takeLatest, call, delay } from 'redux-saga/effects';

import axios from 'axios';
import {
   showModal,
   registerUserStart,
   registerUserSuccess,
   registerUserError,
   logInUserSuccess,
   logOut,
   logoutSucceed,
   checkAuthTimeout,
   hideModal,
} from '../../store/actions/actionCreators';
import {
   SHOW_REGISTRATION_FORM,
   SHOW_LOG_IN_FORM,
   REGISTER_USER,
   LOG_IN_USER,
   LOG_OUT,
   LOG_IN_TIMEOUT,
} from '../types';

export function* sagaFormsWatcher() {
   yield takeLatest(
      [SHOW_LOG_IN_FORM, SHOW_REGISTRATION_FORM],
      sagaFormsWorker,
   );
}

export function* sagaFormsWorker() {
   yield put(showModal());
}

export function* sagaRegistrationWatcher() {
   yield takeLatest(REGISTER_USER, sagaRegistrationWorker);
}

export function* sagaRegistrationWorker({
   payload: { url, email, password, name, city, age, resetForm, setSubmitting },
}) {
   yield put(registerUserStart());
   try {
      const response = yield call(postUser, {
         url,
         email,
         password,
         name,
         city,
         age,
      });
      yield put(registerUserSuccess(response.data));
   } catch (error) {
      yield put(registerUserError(error.message));
   } finally {
      yield call(resetForm);
      yield call(setSubmitting, false);
   }
}

export function* sagaLogOutWatcher() {
   yield takeLatest(LOG_OUT, logout);
}

export function* sagaLogInWatcher() {
   yield takeLatest(LOG_IN_USER, sagaLogInWorker);
}

export function* sagaAuthTimeout() {
   yield takeLatest(LOG_IN_TIMEOUT, checkTimeout);
}

export function* sagaLogInWorker({
   payload: { url, email, password, resetForm, setSubmitting },
}) {
   try {
      const response = yield call(() => axios.post(url, { email, password }));
      const expirationDate = new Date(new Date().getTime() + 3600 * 2 * 1000);
      yield localStorage.setItem('expirationDate', expirationDate);
      yield localStorage.setItem('userId', response.data._id);
      yield put(
         logInUserSuccess({
            user: response.data,
         }),
      );
      yield put(checkAuthTimeout({ expirationTime: 3600 * 2 }));
   } catch (e) {
   } finally {
      yield call(resetForm);
      yield call(setSubmitting, false);
   }
}
function* logout() {
   yield localStorage.removeItem('expirationDate');
   yield localStorage.removeItem('userId');
   yield put(logoutSucceed());
}

function* checkTimeout({ payload: expirationTime }) {
   console.log(expirationTime);
   yield delay(expirationTime * 1000);
   // console.log('logout');
   // yield put(logOut());
}

const postUser = async ({ url, email, password, name, city, age }) => {
   return await axios.post(url, { email, password, name, city, age });
};
