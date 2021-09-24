import NameSpace from '../../name-space';
import {createSelector} from 'reselect';
import { RootState } from '../root-reducer';

export const getIsLoading = (state: RootState) => {
  return state[NameSpace.FILMS].isLoading;
};

export const getFilmById = (state: RootState, props: {selectedID: number}) => {
  const film = getFilms(state).find((it) => it.id === props.selectedID);
  return film;
};

export const getSimilarFilms = (state: RootState, id: number) => {
  const filmById = getFilmById(state, {selectedID: id});
  const films = getFilms(state).filter((film) => {
    return Boolean(film.genre === filmById.genre && film.id !== id);
  });
  return films;
};

export const getFilms = (state: RootState) => {
  return state[NameSpace.FILMS].films;
};

export const getTags = createSelector(getFilms, (films) => {
  return [
    ...new Set(
      films.map((f) => {
        return f.genre;
      })
    ),
  ];
});
export const getSelectFilm = (state: RootState, id: number) => {
  return state[NameSpace.FILMS].films.find((it) => it.id === id);
};
