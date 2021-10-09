import { IFilm } from "../../models/models";


export const SET_LOADING_PROMO_FILM = `SET_LOADING_PROMO_FILM` as const;
export const LOADED_PROMO_FILMS = `LOADED_PROMO_FILMS` as const;
export const SET_ERROR_LOAD_PROMO_FILMS = `SET_ERROR_LOAD_PROMO_FILMS` as const;
export const TRIGGER_LOAD_PROMO_FILMS = `TRIGGER_LOAD_PROMO_FILMS` as const;


export const triggerLoadPromoFilm = () => ({
  type: TRIGGER_LOAD_PROMO_FILMS,
});

export const setLoadingPromo = (payload: boolean) => ({
  type: SET_LOADING_PROMO_FILM,
  payload,
});

export const loadedPromo = (payload: IFilm) => ({
  type: LOADED_PROMO_FILMS,
  payload,
});

export const setErrorLoadPromo = (payload: boolean) => ({
  type: SET_ERROR_LOAD_PROMO_FILMS,
  payload,
});

export type TypePromoFilmActions =
  | ReturnType<typeof setLoadingPromo>
  | ReturnType<typeof loadedPromo> 
  | ReturnType<typeof setErrorLoadPromo>
  | ReturnType<typeof triggerLoadPromoFilm>
