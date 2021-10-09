import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {
  getSelectedFilms,
  hasSelectedFilms,
  getFavoriteFilms,
} from '../../store/reducers/shown-films/shown-films-selector';
import {getAuthStatus} from '../../store/reducers/user/user-selector';
import {AuthorizationStatus} from '../../store/reducers/user/user-reducer';
import history from '../../history';
import {triggerSendFavoriteFilms} from '../../store/actions/favorite-films-actions';
import {deleteFilm, selectedFilm} from '../../store/actions/shown-film-actions';
import {IAuth, IFilm} from '../../models/models';
import { RootState } from '../../store/reducers/root-reducer';
import { AppDispatch } from '../..';

type Props = {
  isFavorite: boolean,
  onChangeFavoriteFilm: (film: number, status: number) => void,
  auth: IAuth,
  film: IFilm,
};

type State = {};

class MyListButton extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this._handleMyListClick = this._handleMyListClick.bind(this);
  }

  _handleMyListClick() {
    const {isFavorite, onChangeFavoriteFilm, auth, film} = this.props;
    const isAuth = auth.status === AuthorizationStatus.AUTH;
    if (!isAuth) {
      history.push(`/singin`);
      return;
    }
    const status = isFavorite ? 0 : 1;
    onChangeFavoriteFilm(film.id, status);
  }
  render() {
    const {film} = this.props;
    const isFavorite = film.isFavorite;
    const mainInList = isFavorite ? (
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    ) : (
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    );

    return (
      <button className="btn btn--list movie-card__button" type="button" onClick={this._handleMyListClick}>
        {mainInList}
        <span>My list</span>
      </button>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  selectedFilms: getSelectedFilms(state),
  isSelect: hasSelectedFilms(state),
  favoriteFilms: getFavoriteFilms(state),
  auth: getAuthStatus(state),
});

const mapDispatchToProps = (dispaptch: AppDispatch) => ({
  onChangeFavoriteFilm(id: number, status: number) {
    dispaptch(triggerSendFavoriteFilms({id, status}));
  },
  addFilm: (film: IFilm) => {
    dispaptch(selectedFilm(film));
  },
  removeFilm: (film: IFilm) => {
    dispaptch(deleteFilm(film));
  },
});

export {MyListButton};
export default connect(mapStateToProps, mapDispatchToProps)(MyListButton);
