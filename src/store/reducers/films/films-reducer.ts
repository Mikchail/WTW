import { IFilm } from '../../../models/models';
import {extend} from '../../../utils';
import {LOADED_FILMS, SET_ERROR_LOADED_FILMS, SET_LOADING_FILMS, TypeFilmsActions} from '../../actions/films-actions';

const initialState = {
  films: [] as IFilm[],
  isLoading: false,
  isError: false,
};

type InitialState = typeof initialState;

export const reducer = (state: InitialState = initialState, action: TypeFilmsActions): InitialState => {
  switch (action.type) {
    case LOADED_FILMS:
      return extend(state, {films: action.payload});
    case SET_LOADING_FILMS: {
      return extend(state, {isLoading: action.payload});
    }
    case SET_ERROR_LOADED_FILMS: {
      return extend(state, {isError: action.payload});
    }
    default:
      return state;
  }
};
