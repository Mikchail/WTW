import {call, put, takeLatest} from 'redux-saga/effects';
import { API } from '../../..';
import { adaptiveFilms } from '../../../adapter';
import { EntryPoints } from '../../consts';
import { loadedPromo, setErrorLoadPromo, setLoadingPromo, TRIGGER_LOAD_PROMO_FILMS } from '../../actions/promo-film-actions';

function* fetchPromoFilm() {
  try {
    yield put(setLoadingPromo(true));
    const films = yield call(API.get, EntryPoints.PROMO);
    yield put(loadedPromo(films.data.map((film) => adaptiveFilms(film))));
    yield put(setLoadingPromo(false));
    yield put(setErrorLoadPromo(false));
  } catch (e) {
    yield put(setErrorLoadPromo(true));
    // yield put({type: 'TODO', message: e.message}); // TODO
  }
}

export function* loadPromoSaga() {
  yield takeLatest(TRIGGER_LOAD_PROMO_FILMS, fetchPromoFilm);
}
