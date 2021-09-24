import { AxiosResponse } from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import { IComment, IReview } from '../../../models/models';
import {
  setloadingComments,
  loadedComments,
  setErrorLoadComment,
  setSendCommentDone,
  TRIGGER_LOADING_COMMENT,
  triggerSendComment,
} from '../../actions/comments-actions';
import {EntryPoints} from '../../consts';

function* loadComments(action: ReturnType<typeof triggerSendComment>) {
  try {
    yield put(setloadingComments(true));
    const responce: AxiosResponse<IReview[]> = yield call(API.get, `${EntryPoints.COMMENTS}${action.payload.filmID}`);
    yield put(loadedComments(responce.data));
    yield put(setloadingComments(false));
    yield put(setErrorLoadComment(false));
    yield put(setSendCommentDone(false));
  } catch (e) {
    yield put(setErrorLoadComment(true));
    // yield put({type: 'TODO', message: e.message}); // TODO
  }
}

export function* loadCommentSaga() {
  yield takeLatest(TRIGGER_LOADING_COMMENT, loadComments);
}
