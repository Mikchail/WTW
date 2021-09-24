import NameSpace from '../../name-space';

export const getLoadingFilmPromo = (state) => {
  return state[NameSpace.PROMO_FILM].isLoadingPromo;
};

export const getFilmPromo = (state) => {
  return state[NameSpace.PROMO_FILM].filmPromo;
};

