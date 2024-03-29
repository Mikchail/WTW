import {extend} from '../../../utils';
import {SET_LOADING_PROMO_FILM, LOADED_PROMO_FILMS, SET_ERROR_LOAD_PROMO_FILMS} from '../../actions/promo-film-actions';

const initialState = {
  isLoadingPromo: true,
  filmPromo: false,
  isErrorPromo: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING_PROMO_FILM:
      return extend(state, {
        isLoadingPromo: action.payload,
      });
    case LOADED_PROMO_FILMS:
      return extend(state, {
        filmPromo: action.payload,
      });
    case SET_ERROR_LOAD_PROMO_FILMS:
      return extend(state, {
        isErrorPromo: action.payload,
      });
    default:
      return state;
  }
};
