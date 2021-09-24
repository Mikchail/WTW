import { IFilm } from '../../../models/models';
import {extend} from '../../../utils';
import {LOADED_FILMS, TypeFilmsActions} from '../../actions/films-actions';

const initialState = {
  films: [] as IFilm[],
  isLoading: false,
  isError: false,
};

type InitialState = typeof initialState;

export const reducer = (state: InitialState = initialState, action: TypeFilmsActions): InitialState => {
  switch (action.type) {
    case LOADED_FILMS:
      return extend(state, {films: action.payload, isLoading: true});
    default:
      return state;
  }
};
