import NameSpace from '../../name-space';
import { RootState } from '../root-reducer';

export const getIsLoadingFavoritesFilms = (state: RootState) => {
  return state[NameSpace.FAVORITE_FILM].isLoadingFavoriteFilms;
};

export const getFavoriteFilms = (state: RootState) => {
  return state[NameSpace.FAVORITE_FILM].favoriteFilms;
};

export const statusFavariteFilms = (state: RootState) => ({
  isLoadingFavoriteFilms: state[NameSpace.FAVORITE_FILM].isLoadingFavoriteFilms,
  isFavoriteFilmsError: state[NameSpace.FAVORITE_FILM].isFavoriteFilmsError,
});