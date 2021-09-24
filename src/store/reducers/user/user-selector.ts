import NameSpace from '../../name-space';

export const getUser = (state) => {
  return state[NameSpace.USER].user;
};
export const getAuthStatus = (state) =>{
  return {
    status: state[NameSpace.USER].authorizationStatus,
    error: state[NameSpace.USER].authorizationError,
    isProgress: state[NameSpace.USER].authorizationInProgress,
  }
}
