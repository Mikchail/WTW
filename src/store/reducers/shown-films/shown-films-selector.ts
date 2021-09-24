import NameSpace from '../../name-space';
import {createSelector} from 'reselect';
import { getFilms } from '../films/films-selectors';

export const getActiveTag = (state) => {
  return state[NameSpace.SHOWN_FILM].currentGenre;
};

export const getFilmsByGenre = (state) => {
  const films = getFilms(state);
  console.log( state);
  
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
export const getSelectedFilms = (state) => {
  return state[NameSpace.SHOW].favoriteFilms;
};

export const hasSelectedFilms = (state) => {
  const favoriteFilms = state[NameSpace.SHOW].favoriteFilms;
  const select = state[NameSpace.SHOW].selectedFilm;
  return favoriteFilms.some((film) => film.id === select.id);
};
export const getFavoriteFilms = (state) => {
  return state[NameSpace.SHOW].favoriteFilms;
};
