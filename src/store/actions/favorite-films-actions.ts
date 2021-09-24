export const SET_LOADING_FAVORITE_FILM = `IS_LOADING_FAVORITE_FILM`;
export const LOAD_FAVORITE_FILMS = `LOAD_FAVORITE_FILMS`;
export const LOAD_FAVORITE_FILMS_ERROR = `LOAD_FAVORITE_FILMS_ERROR`;
export const SEND_FAVORITE_FILM = `SEND_FAVORITE_FILM`;
export const SEND_FAVORITE_FILM_DONE = `SEND_FAVORITE_FILM_DONE`;
export const SEND_FAVORITE_FILM_ERROR = `SEND_FAVORITE_FILM_ERROR`;


export const TRIGGER_LOAD_FAVORITE_FILMS = `TRIGGER_LOAD_FAVORITE_FILMS`;
export const TRIGGER_SEND_FAVORITE_FILMS = `TRIGGER_SEND_FAVORITE_FILMS`;

export const triggerLoadFavoriteFilms = () => ({
  type: TRIGGER_LOAD_FAVORITE_FILMS,
});

export const triggerSendFavoriteFilms = (payload) => ({
  type: TRIGGER_SEND_FAVORITE_FILMS,
  payload
});



export const setSendingFavoriteFilm = (review) => ({
  type: SEND_FAVORITE_FILM,
  payload: review,
});
export const sendFavoriteFilmDone = (done) => ({
  type: SEND_FAVORITE_FILM_DONE,
  payload: done,
});
export const sendFavoriteFilmError = (error) => ({
  type: SEND_FAVORITE_FILM_ERROR,
  payload: error,
});

export const setLoadingFavoriteFilm = (load) => ({
  type: SET_LOADING_FAVORITE_FILM,
  payload: load,
});
export const loadedFavoriteFilms = (favoritsFilms) => ({
  type: LOAD_FAVORITE_FILMS,
  payload: favoritsFilms,
});
export const setLoadingErrorFavoriteFilms = (error) => ({
  type: LOAD_FAVORITE_FILMS_ERROR,
  payload: error,
});
