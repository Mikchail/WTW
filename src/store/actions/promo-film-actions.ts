

export const SET_LOADING_PROMO_FILM = `SET_LOADING_PROMO_FILM`;
export const LOADED_PROMO_FILMS = `LOADED_PROMO_FILMS`;
export const SET_ERROR_LOAD_PROMO_FILMS = `SET_ERROR_LOAD_PROMO_FILMS`;
export const TRIGGER_LOAD_PROMO_FILMS = `TRIGGER_LOAD_PROMO_FILMS`;


export const triggerLoadPromoFilm = () => ({
  type: TRIGGER_LOAD_PROMO_FILMS,
});

export const setLoadingPromo = (payload: boolean) => ({
  type: SET_LOADING_PROMO_FILM,
  payload,
});

export const loadedPromo = (payload) => ({
  type: LOADED_PROMO_FILMS,
  payload,
});

export const setErrorLoadPromo = (payload) => ({
  type: SET_ERROR_LOAD_PROMO_FILMS,
  payload,
});