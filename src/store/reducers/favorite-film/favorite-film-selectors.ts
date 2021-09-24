import NameSpace from '../../name-space';

export const getIsLoadingFavoritesFilms = (state) => {
  return state[NameSpace.FAVORITE_FILM].isLoadingFavoriteFilms;
};

export const getFavoriteFilms = (state) => {
  return state[NameSpace.FAVORITE_FILM].favoriteFilms;
};

export const statusFavariteFilms = (state) => ({
  isLoadingFavoriteFilms: state[NameSpace.FAVORITE_FILM].isLoadingFavoriteFilms,
  isFavoriteFilmsError: state[NameSpace.FAVORITE_FILM].isFavoriteFilmsError,
});