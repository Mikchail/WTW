import { IFilm } from "../../models/models";

export const CHOOSE_FILM = `CHOOSE_FILM` as const;
export const SELECTED_FILMS = `SELECTED_FILMS` as const;
export const DELETE_FILMS = `DELETE_FILMS` as const;
export const CHOOSE_GENRE = `CHOOSE_GENRE` as const;

export const chooseFilm = (film: IFilm) => ({
  type: CHOOSE_FILM,
  payload: film,
});
export const chooseGenre = (genre: string) => ({
  type: CHOOSE_GENRE,
  payload: genre,
});
export const selectedFilm = (film: IFilm) => ({
  type: SELECTED_FILMS,
  payload: film,
});
export const deleteFilm = (payload: IFilm) => ({
  type: DELETE_FILMS,
  payload,
});


export type TypeShownFilmActions =
  | ReturnType<typeof chooseFilm>
  | ReturnType<typeof chooseGenre> 
  | ReturnType<typeof selectedFilm>
  | ReturnType<typeof deleteFilm>;
