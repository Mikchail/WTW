import {extend} from '../../../utils';
import {
  SET_LOADING_FAVORITE_FILM,
  LOAD_FAVORITE_FILMS,
  LOAD_FAVORITE_FILMS_ERROR,
} from '../../actions/favorite-films-actions';

const initialState = {
  isLoadingFavoriteFilms: true,
  favoriteFilms: [],
  isFavoriteFilmsError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_FAVORITE_FILM:
      return extend(state, {isLoadingFavoriteFilms: action.payload});
    case LOAD_FAVORITE_FILMS:
      return extend(state, {favoriteFilms: action.payload});
    case LOAD_FAVORITE_FILMS_ERROR:
      return extend(state, {isFavoriteFilmsError: action.payload});
    default:
      return state;
  }
};
