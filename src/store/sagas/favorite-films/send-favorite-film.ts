import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import {
  TRIGGER_SEND_FAVORITE_FILMS,
  setSendingFavoriteFilm,
  triggerSendFavoriteFilms,
  sendFavoriteFilmError,
} from '../../actions/favorite-films-actions';
import { triggerLoadFilms } from '../../actions/films-actions';
import { EntryPoints } from '../../consts';


function* sendFavoriteFilm(action: ReturnType<typeof triggerSendFavoriteFilms>) {
  const { id, status } = action.payload;
  try {
    yield put(setSendingFavoriteFilm(true));
    yield call(API.post, `${EntryPoints.FAVORITE}/${id}/${status}`);
    yield put(setSendingFavoriteFilm(false));
    yield put(triggerLoadFilms());
  } catch (e) {
    yield put(sendFavoriteFilmError(true));
  }
}

export function* sendFavoriteFilmsSaga() {
  yield takeLatest(TRIGGER_SEND_FAVORITE_FILMS, sendFavoriteFilm);
}
