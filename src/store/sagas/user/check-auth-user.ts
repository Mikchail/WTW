import { AxiosResponse } from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import { API } from '../../..';
import { IUser } from '../../../models/models';
import { errorAuthorization, requireAuthorization, setProgressStatus, setUserData, TRIGGER_CHECK_AUTH } from '../../actions/user-actions';
import { AuthorizationStatus } from '../../reducers/user/user-reducer';

function* checkAuth() {
  try {
    yield put(setProgressStatus(true));
    const user: AxiosResponse<IUser> = yield call(API.get, `/login`);
    yield put(errorAuthorization(false));
    yield put(requireAuthorization(AuthorizationStatus.AUTH));
    yield put(setUserData(user.data));
    yield put(setProgressStatus(false));
    
  } catch (e) {
    yield put(setProgressStatus(true));
    yield put(errorAuthorization(true));
  }
}


export function* checkAuthSaga() {
  yield takeLatest(TRIGGER_CHECK_AUTH, checkAuth);
}
