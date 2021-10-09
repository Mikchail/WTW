import {call, put, takeLatest} from 'redux-saga/effects';
import { API } from '../../..';
import { adaptiveFilms } from '../../../adapter';
import { EntryPoints } from '../../consts';
import { loadedPromo, setErrorLoadPromo, setLoadingPromo, TRIGGER_LOAD_PROMO_FILMS } from '../../actions/promo-film-actions';
import { AxiosResponse } from 'axios';
import { IFilm } from '../../../models/models';

function* fetchPromoFilm() {
  try {
    yield put(setLoadingPromo(true));
    const film: AxiosResponse<IFilm> = yield call(API.get, EntryPoints.PROMO);
    yield put(loadedPromo(adaptiveFilms(film.data)));
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
