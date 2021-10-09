import history from '../../history';
import {ActionType} from '../consts';
import { Middleware } from 'redux';
import { RootState } from '../reducers/root-reducer';

export const redirect: Middleware<{},RootState> = (_store) => (next) => (action) => {
  if (action.type === ActionType.REDIRECT_TO_ROUTE) {
    history.push(action.payload);
  }
  return next(action);
};
