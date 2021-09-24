import history from "../../history";
import {ActionType} from "../consts";

export const redirect = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }

  return next(action);
};
