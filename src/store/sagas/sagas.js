import { put, takeLatest } from 'redux-saga/effects';
import { showModal } from '../../store/actions/actionCreators';
import { SHOW_REGISTRATION_FORM, SHOW_LOG_IN_FORM } from '../types';

export function* sagaFormsWatcher() {
   yield takeLatest(
      [SHOW_LOG_IN_FORM, SHOW_REGISTRATION_FORM],
      sagaFormsWorker,
   );
}

export function* sagaFormsWorker() {
   yield put(showModal());
}
