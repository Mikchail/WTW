import React, {FC} from 'react';
import {connect} from 'react-redux';
import SmallMovieCard from '../small-movie-card/small-movie-card';
import withSmallPlayer from '../../hocs/with-small-player/with-small-player';
import history from '../../history';
import {chooseFilm} from '../../store/actions/shown-film-actions';
import {IFilm} from '../../models/models';
import { AppDispatch } from '../..';

const SmallMovieCardWrapped = withSmallPlayer(SmallMovieCard);

type Props = {
  films: IFilm[],
};

const CatalogList: FC<Props> = (props) => {
  const {films} = props;
  return (
    <div className="catalog__movies-list">
      {films &&
        films.map((film) => {
          return (
            <SmallMovieCardWrapped
              history={history}
              key={film.title}
              film={film}
            />
          );
        })}
    </div>
  );
};

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleSelectedFilms: (film: IFilm) => {
    dispatch(chooseFilm(film));
  },
});
export default connect(null, mapDispatchToProps)(CatalogList);
