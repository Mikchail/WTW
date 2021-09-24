import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import {
  TRIGGER_SEND_FAVORITE_FILMS,
  setSendingFavoriteFilm,
} from '../../actions/favorite-films-actions';
import { triggerLoadFilms } from '../../actions/films-actions';
import { EntryPoints } from '../../consts';


function* sendFavoriteFilm(action) {
  const { id, status } = action.payload;
  try {
    yield put(setSendingFavoriteFilm(true));
    yield call(API.post, `${EntryPoints.FAVORITE}/${id}/${status}`);
    yield put(setSendingFavoriteFilm(false));
    yield put(triggerLoadFilms());
  } catch (e) {
    yield put({type: 'TODO', message: e.message});
  }
}

export function* sendFavoriteFilmsSaga() {
  yield takeLatest(TRIGGER_SEND_FAVORITE_FILMS, sendFavoriteFilm);
}
