import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
   showModal,
   registerUserStart,
   registerUserSuccess,
   registerUserError,
   logInUser,
   hideModal,
} from '../../store/actions/actionCreators';
import {
   SHOW_REGISTRATION_FORM,
   SHOW_LOG_IN_FORM,
   REGISTER_USER,
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

export function* sagaLogInWatcher() {}

const postUser = async ({ url, email, password, name, city, age }) => {
   return await axios.post(url, { email, password, name, city, age });
};
