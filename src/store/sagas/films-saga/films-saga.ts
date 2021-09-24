import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import { API } from '../../..';
import { adaptiveFilms } from '../../../adapter';
import { EntryPoints } from '../../consts';
import { TRIGGER_LOAD_FILMS, setLoadingFilm, loadedFilms, setErrorLoadFilm } from '../../actions/films-actions';

function* fetchFilms() {
  try {
    yield put(setLoadingFilm(true));
    const films = yield call(API.get, EntryPoints.FILMS);
    yield put(loadedFilms(films.data.map((film) => adaptiveFilms(film))));
    yield put(setLoadingFilm(false));
    yield put(setErrorLoadFilm(false));
  } catch (e) {
    yield put(setErrorLoadFilm(true));
    // yield put({type: 'TODO', message: e.message}); // TODO
  }
}

export function* filmSaga() {
  yield takeEvery(TRIGGER_LOAD_FILMS, fetchFilms);
}
