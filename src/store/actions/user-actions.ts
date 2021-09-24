import {IUser} from '../../models/models';

export const REQUIRED_AUTHORIZATION = `REQUIRED_AUTHORIZATION` as const;
export const CHANGE_ACTIVE_FILM = `CHANGE_ACTIVE_FILM` as const;
export const CHECK_STATUS = `CHECK_STATUS` as const;
export const REDIRECT_TO_ROUTE = `REDIRECT_TO_ROUTE` as const;
export const SET_USER_DATA = `SET_USER_DATA`;
export const ERROR_AUTHORIZATION = `ERROR_AUTHORIZATION` as const;
export const SET_PROGRESS_STATUS = `SET_PROGRESS_STATUS` as const;

export const TRIGGER_CHECK_AUTH = `TRIGGER_CHECK_AUTH` as const;
export const TRIGGER_LOGIN_USER = `TRIGGER_LOGIN_USER` as const;

export const triggerCheckAuth = () => ({
  type: TRIGGER_CHECK_AUTH,
});

export const triggerLogin = (payload: {email: string, password: string}) => ({
  type: TRIGGER_LOGIN_USER,
  payload,
});

export const requireAuthorization = (payload: string) => ({
  type: REQUIRED_AUTHORIZATION,
  payload,
});

export const errorAuthorization = (payload: boolean) => ({
  type: ERROR_AUTHORIZATION,
  payload,
});

export const setProgressStatus = (payload: boolean) => ({
  type: SET_PROGRESS_STATUS,
  payload,
});

export const setUserData = (payload: IUser) => ({
  type: SET_USER_DATA,
  payload,
});

export type TypeUserActions =
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof errorAuthorization> 
  | ReturnType<typeof setProgressStatus>
  | ReturnType<typeof setUserData>
  | ReturnType<typeof triggerCheckAuth>;
