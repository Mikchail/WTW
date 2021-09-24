import NameSpace from '../../name-space';
import {createSelector} from 'reselect';

export const getIsLoading = (state) => {
  return state[NameSpace.FILMS].isLoading;
};

export const getFilmById = (state, props) => {
  const film = getFilms(state).find((it) => it.id === props.selectedID);
  return film;
};

export const getSimilarFilms = (state, id) => {
  const filmById = getFilmById(state, {selectedID: id});
  const films = getFilms(state).filter((film) => {
    return film.genre === filmById.genre && film.id !== id;
  });
  return films;
};

export const getFilms = (state) => {
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
export const getSelectFilm = (state, id) => {
  return state.find((it) => it.id === id);
};
