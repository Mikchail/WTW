import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import {
  setloadingComments,
  loadedComments,
  setErrorLoadComment,
  setSendCommentDone,
  TRIGGER_LOADING_COMMENT,
} from '../../actions/comments-actions';
import {EntryPoints} from '../../consts';

function* loadComments(action) {
  try {
    yield put(setloadingComments(true));
    const responce = yield call(API.get, `${EntryPoints.COMMENTS}${action.payload.filmID}`);
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
