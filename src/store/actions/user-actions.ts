export const REQUIRED_AUTHORIZATION = `REQUIRED_AUTHORIZATION`;
export const CHANGE_ACTIVE_FILM = `CHANGE_ACTIVE_FILM`;
export const CHECK_STATUS = `CHECK_STATUS`;
export const REDIRECT_TO_ROUTE = `REDIRECT_TO_ROUTE`;
export const SET_USER_DATA = `SET_USER_DATA`;
export const ERROR_AUTHORIZATION = `ERROR_AUTHORIZATION`;
export const SET_PROGRESS_STATUS = `SET_PROGRESS_STATUS`;


export const TRIGGER_CHECK_AUTH = `TRIGGER_CHECK_AUTH`;
export const TRIGGER_LOGIN_USER = `TRIGGER_LOGIN_USER`;

export const triggerCheckAuth = () => ({
  type: TRIGGER_CHECK_AUTH,
});

export const triggerLogin = (payload) => ({
  type: TRIGGER_LOGIN_USER,
  payload
});

export const requireAuthorization = (status) => ({
  type: REQUIRED_AUTHORIZATION,
  payload: status,
});

export const errorAuthorization = (error) => ({
  type: ERROR_AUTHORIZATION,
  payload: error,
});

export const setProgressStatus = (status) => ({
  type: SET_PROGRESS_STATUS,
  payload: status,
});

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});
