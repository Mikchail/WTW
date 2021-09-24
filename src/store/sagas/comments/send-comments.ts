import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import {
  loadedComments,
  setSendCommentDone,
  TRIGGER_SEND_COMMENT,
  setSendingComment,
  setSendCommentError,
} from '../../actions/comments-actions';
import {EntryPoints} from '../../consts';

function* sendComment(action) {
  const {review, filmID} = action.payload;
  const body = {
    rating: review.rating,
    comment: review.comment,
  };
  try {
    yield put(setSendingComment(true));
    const responce = yield call(API.post, `${EntryPoints.COMMENTS}${filmID}`, body);
    yield put(loadedComments(responce.data));
    yield put(setSendingComment(false));
    yield put(setSendCommentError(false));
    yield put(setSendCommentDone(false));
  } catch (e) {
    yield put(setSendCommentError(true));
    // yield put({type: 'TODO', message: e.message}); // TODO
  }
}

export function* sendCommentSaga() {
  yield takeLatest(TRIGGER_SEND_COMMENT, sendComment);
}
