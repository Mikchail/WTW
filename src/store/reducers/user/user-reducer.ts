import {extend} from '../../../utils';
import {
  ERROR_AUTHORIZATION,
  REQUIRED_AUTHORIZATION,
  SET_PROGRESS_STATUS,
  SET_USER_DATA,
} from '../../actions/user-actions';

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  user: false,
  isLogin: false,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationError: false,
  authorizationInProgress: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_DATA:
      return extend(state, {
        user: action.payload,
      });
    case ERROR_AUTHORIZATION:
      return extend(state, {
        authorizationError: action.payload,
      });
    case SET_PROGRESS_STATUS:
      return extend(state, {
        authorizationInProgress: action.payload,
      });
    case REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    default:
      return state;
  }
}
