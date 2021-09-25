import React, {useEffect, FC} from 'react';
import {getFavoriteFilms, statusFavariteFilms} from '../../store/reducers/favorite-film/favorite-film-selectors';
import CatalogList from '../catalog-list/catalog-list';
import {connect} from 'react-redux';
import { triggerLoadFavoriteFilms } from '../../store/actions/favorite-films-actions';
import { IFilm } from '../../models/models';
import { RootState } from '../../store/reducers/root-reducer';
import { AppDispatch } from '../..';

type Props = {
  loadFavoritefilms: () => void,
  statusFavariteFilms: {
    isLoadingFavoriteFilms: boolean;
  },
  favoriteFilms: IFilm[],
};

const Mylist: FC<Props> = (props) => {
  const {loadFavoritefilms, statusFavariteFilms, favoriteFilms} = props;

  useEffect(() => {
    loadFavoritefilms();
  }, []);

  if (statusFavariteFilms.isLoadingFavoriteFilms) {
    return <div>Loading</div>;
  }
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      {favoriteFilms.length && <CatalogList films={favoriteFilms} />}
    </section>
  );
};

const mapStateToProps = (state: RootState) => ({
  favoriteFilms: getFavoriteFilms(state),
  statusFavariteFilms: statusFavariteFilms(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadFavoritefilms: () => {
    dispatch(triggerLoadFavoriteFilms());
  },
});

export {Mylist};
export default connect(mapStateToProps, mapDispatchToProps)(Mylist);
