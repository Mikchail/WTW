export const CHOOSE_FILM = `CHOOSE_FILM`;
export const SELECTED_FILMS = `SELECTED_FILMS`;
export const DELETE_FILMS = `DELETE_FILMS`;
export const CHOOSE_GENRE = `CHOOSE_GENRE`;

export const chooseFilm = (film) => ({
  type: CHOOSE_FILM,
  payload: film,
});
export const chooseGenre = (genre) => ({
  type: CHOOSE_GENRE,
  payload: genre,
});
export const selectedFilm = (film) => ({
  type: SELECTED_FILMS,
  payload: film,
});
export const deleteFilm = (film) => ({
  type: DELETE_FILMS,
  payload: film,
});
