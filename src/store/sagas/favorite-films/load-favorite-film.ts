import {call, put, takeLatest} from 'redux-saga/effects';
import {API} from '../../..';
import {adaptiveFilms} from '../../../adapter';
import {
  setLoadingFavoriteFilm,
  TRIGGER_LOAD_FAVORITE_FILMS,
  setLoadingErrorFavoriteFilms,
  loadedFavoriteFilms,
} from '../../actions/favorite-films-actions';
import {EntryPoints} from '../../consts';

function* fetchFavoriteFilms() {
  try {
    yield put(setLoadingFavoriteFilm(true));
    const favoritesFilms = yield call(API.get, EntryPoints.FAVORITE);
    yield put(loadedFavoriteFilms(favoritesFilms.data.map((film) => adaptiveFilms(film))));
    yield put(setLoadingFavoriteFilm(false));
    yield put(setLoadingErrorFavoriteFilms(false));
  } catch (e) {
    yield put(setLoadingErrorFavoriteFilms(true));
    // yield put({type: 'TODO', message: e.message}); // TODO
  }
}

export function* favoriteFilmsSaga() {
  yield takeLatest(TRIGGER_LOAD_FAVORITE_FILMS, fetchFavoriteFilms);
}

