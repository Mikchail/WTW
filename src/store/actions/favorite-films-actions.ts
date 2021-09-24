import { IFilm } from "../../models/models";

export const SET_LOADING_FAVORITE_FILM = `IS_LOADING_FAVORITE_FILM` as const;
export const LOAD_FAVORITE_FILMS = `LOAD_FAVORITE_FILMS` as const;
export const LOAD_FAVORITE_FILMS_ERROR = `LOAD_FAVORITE_FILMS_ERROR` as const;
export const SEND_FAVORITE_FILM = `SEND_FAVORITE_FILM` as const;
export const SEND_FAVORITE_FILM_DONE = `SEND_FAVORITE_FILM_DONE` as const;
export const SEND_FAVORITE_FILM_ERROR = `SEND_FAVORITE_FILM_ERROR` as const;


export const TRIGGER_LOAD_FAVORITE_FILMS = `TRIGGER_LOAD_FAVORITE_FILMS` as const;
export const TRIGGER_SEND_FAVORITE_FILMS = `TRIGGER_SEND_FAVORITE_FILMS` as const;

export const triggerLoadFavoriteFilms = () => ({
  type: TRIGGER_LOAD_FAVORITE_FILMS,
});

export const triggerSendFavoriteFilms = (payload: {id: number, status: number}) => ({
  type: TRIGGER_SEND_FAVORITE_FILMS,
  payload
});



export const setSendingFavoriteFilm = (payload: boolean) => ({
  type: SEND_FAVORITE_FILM,
  payload,
});

export const sendFavoriteFilmDone = (payload: boolean) => ({
  type: SEND_FAVORITE_FILM_DONE,
  payload,
});

export const sendFavoriteFilmError = (payload: boolean) => ({
  type: SEND_FAVORITE_FILM_ERROR,
  payload,
});

export const setLoadingFavoriteFilm = (payload: boolean) => ({
  type: SET_LOADING_FAVORITE_FILM,
  payload,
});
export const loadedFavoriteFilms = (payload: IFilm[]) => ({
  type: LOAD_FAVORITE_FILMS,
  payload,
});
export const setLoadingErrorFavoriteFilms = (payload: boolean) => ({
  type: LOAD_FAVORITE_FILMS_ERROR,
  payload,
});

export type TypeFavoriteFilmsActions =
  | ReturnType<typeof setSendingFavoriteFilm>
  | ReturnType<typeof sendFavoriteFilmDone> 
  | ReturnType<typeof sendFavoriteFilmError>
  | ReturnType<typeof setLoadingFavoriteFilm>
  | ReturnType<typeof loadedFavoriteFilms>
  | ReturnType<typeof setLoadingErrorFavoriteFilms>
