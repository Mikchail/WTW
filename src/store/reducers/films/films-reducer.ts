import { extend } from "../../../utils";
import { GET_FILMS, LOADED_FILMS } from "../../actions/films-actions";

const initialState = {
  films: [],
  isLoading: false,
  isError: false,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FILMS:
      return state;
    case LOADED_FILMS:
      return extend(state, {films: action.payload, isLoading: true});
    default:
      return state;
  }
};
