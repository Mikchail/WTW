import { IFilm } from '../../../models/models';
import {extend} from '../../../utils';
import {CHOOSE_FILM, CHOOSE_GENRE, DELETE_FILMS, SELECTED_FILMS, TypeShownFilmActions} from '../../actions/shown-film-actions';

function deleteFilm(array: IFilm[], film: IFilm) {
  const index = array.findIndex((f) => f.id === film.id);
  return array.slice(0, index).concat(array.slice(index + 1));
}

const initialState = {
  currentGenre: `All genres`,
  filmsByGenre: [],
  sameFilms: [],
  selectedFilm: {} as IFilm,
  favoriteFilms: [],
};

type InitialState = typeof initialState;

export const reducer = (state: InitialState = initialState, action: TypeShownFilmActions): InitialState => {
  switch (action.type) {
    case CHOOSE_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
    case CHOOSE_FILM:
      return extend(state, {
        selectedFilm: action.payload,
      });
    case SELECTED_FILMS:
      return extend(state, {
        favoriteFilms: [...state.favoriteFilms, action.payload],
      });
    case DELETE_FILMS:
      return extend(state, {
        favoriteFilms: deleteFilm(state.favoriteFilms, action.payload),
      });
    default:
      return state;
  }
}
