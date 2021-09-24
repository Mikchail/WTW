import { IFilm } from "../../models/models";

export const GET_FILMS = `GET_FILMS` as const;
export const TRIGGER_LOAD_FILMS = `TRIGGER_LOAD_FILMS` as const;
export const LOADED_FILMS = `LOADED_FILMS` as const;
export const SET_LOADING_FILMS = `SET_LOADING_FILMS` as const;
export const SET_ERROR_LOADED_FILMS = `SET_ERROR_LOADED_FILMS` as const;



export const triggerLoadFilms = () => ({
  type: TRIGGER_LOAD_FILMS,
});

export const setLoadingFilm = (payload: boolean) => ({
  type: SET_LOADING_FILMS,
  payload,
});

export const loadedFilms = (films: IFilm[]) => ({
  type: LOADED_FILMS,
  payload: films,
});

export const setErrorLoadFilm = (payload: boolean) => ({
  type: SET_ERROR_LOADED_FILMS,
  payload,
});



export type TypeFilmsActions =
  | ReturnType<typeof setLoadingFilm>
  | ReturnType<typeof loadedFilms> 
  | ReturnType<typeof setErrorLoadFilm>
  | ReturnType<typeof triggerLoadFilms>
