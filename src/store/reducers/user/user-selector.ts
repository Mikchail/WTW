import NameSpace from '../../name-space';
import { RootState } from '../root-reducer';

export const getUser = (state: RootState) => {
  return state[NameSpace.USER].user;
};
export const getAuthStatus = (state: RootState) =>{
  return {
    status: state[NameSpace.USER].authorizationStatus,
    error: state[NameSpace.USER].authorizationError,
    isProgress: state[NameSpace.USER].authorizationInProgress,
  }
}
  