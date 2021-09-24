export const GET_FILMS = `GET_FILMS`;
export const TRIGGER_LOAD_FILMS = `TRIGGER_LOAD_FILMS`;
export const LOADED_FILMS = `LOADED_FILMS`;
export const SET_LOADING_FILMS = `SET_LOADING_FILMS`;
export const SET_ERROR_LOADED_FILMS = `SET_ERROR_LOADED_FILMS`;

export const setLoadingFilm = (payload) => ({
  type: IS_LOAD_FILMS,
  payload,
});

export const getFilms = () => ({
  type: GET_FILMS,
});
export const triggerLoadFilms = () => ({
  type: TRIGGER_LOAD_FILMS,
});

export const loadedFilms = (films) => ({
  type: LOADED_FILMS,
  payload: films,
});

export const setErrorLoadFilm = (payload) => ({
  type: SET_ERROR_LOADED_FILMS,
  payload,
});
