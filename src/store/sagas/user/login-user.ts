import { AxiosResponse } from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import { IUser } from '../../../models/models';
import {
  errorAuthorization,
  requireAuthorization,
  setProgressStatus,
  setUserData,
  triggerLogin,
  TRIGGER_LOGIN_USER,
  TypeUserActions,
} from '../../actions/user-actions';
import {AuthorizationStatus} from '../../reducers/user/user-reducer';

function* loginUser(action: ReturnType<typeof triggerLogin>) {
  try {
    const authData = action.payload;
    const body = {
      email: authData.email,
      password: authData.password,
    };
    yield put(setProgressStatus(true));
    const user: AxiosResponse<IUser> = yield call(API.post, `/login`, body);
    yield put(requireAuthorization(AuthorizationStatus.AUTH));
    yield put(setUserData(user.data));
    yield put(errorAuthorization(false));
    yield put(setProgressStatus(false));
  } catch (e) {
    yield put(errorAuthorization(true));
    yield put(setProgressStatus(true));
  }
}

export function* loginUserSaga() {
  yield takeLatest(TRIGGER_LOGIN_USER, loginUser);
}
