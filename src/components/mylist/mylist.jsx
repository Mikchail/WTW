import React, {useEffect} from 'react';
import {getFavoriteFilms, statusFavariteFilms} from '../../store/reducers/data/data-selector';
import {Operations as DataOperations} from '../../store/reducers/data/data-reducer';
import CatalogList from '../catalog-list/catalog-list';
import {connect} from 'react-redux';

const Mylist = (props) => {
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
      {favoriteFilms && <CatalogList films={favoriteFilms} />}
    </section>
  );
};

const mapStateToProps = (state) => ({
  favoriteFilms: getFavoriteFilms(state),
  statusFavariteFilms: statusFavariteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadFavoritefilms: () => {
    dispatch(DataOperations.loadFavoriteFilms());
  },
});

export {Mylist};
export default connect(mapStateToProps, mapDispatchToProps)(Mylist);
