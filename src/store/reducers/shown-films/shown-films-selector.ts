import NameSpace from '../../name-space';
import {createSelector} from 'reselect';
import { getFilms } from '../films/films-selectors';
import { RootState } from '../root-reducer';
import { IFilm } from '../../../models/models';

export const getActiveTag = (state: RootState) => {
  return state[NameSpace.SHOWN_FILM].currentGenre;
};

export const getFilmsByGenre = (state: RootState) => {
  const films = getFilms(state);
  const tag = state[NameSpace.SHOWN_FILM].currentGenre;
  if (tag === `All genres`) {
    return films;
  }

  const filmsByGenre = createSelector(getFilms, (items) => {
    return items.filter((item) => {
      return item.genre === tag;
    });
  });

  return filmsByGenre(state);
};
export const getSelectedFilms = (state: RootState) => {
  return state[NameSpace.SHOWN_FILM].favoriteFilms;
};

export const hasSelectedFilms = (state: RootState) => {
  const favoriteFilms = state[NameSpace.SHOWN_FILM].favoriteFilms;
  const select = state[NameSpace.SHOWN_FILM].selectedFilm;
  return favoriteFilms.some((film: IFilm) => film.id === select.id);
};
export const getFavoriteFilms = (state: RootState) => {
  return state[NameSpace.SHOWN_FILM].favoriteFilms;
};
