import {fork} from '@redux-saga/core/effects';
import {loadCommentSaga, sendCommentSaga} from './comments';
import {favoriteFilmsSaga, sendFavoriteFilmsSaga} from './favorite-films';
import {filmSaga} from './films-saga';
import {loadPromoSaga} from './promo-film';
import {checkAuthSaga, loginUserSaga} from './user';

export default function* rootSaga() {
  yield fork(filmSaga);
  yield fork(sendFavoriteFilmsSaga);
  yield fork(favoriteFilmsSaga);
  yield fork(loadCommentSaga);
  yield fork(sendCommentSaga);
  yield fork(loadPromoSaga);
  yield fork(checkAuthSaga);
  yield fork(loginUserSaga);
}
