import NameSpace from '../../name-space';
import { RootState } from '../root-reducer';

export const getLoadingFilmPromo = (state: RootState) => {
  return state[NameSpace.PROMO_FILM].isLoadingPromo;
};

export const getFilmPromo = (state: RootState) => {
  return state[NameSpace.PROMO_FILM].filmPromo;
};

