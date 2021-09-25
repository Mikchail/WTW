import React, {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import Loading from '../loading/loading';
import Header from '../header/header';
import Content from '../content/content';
import {getFilmPromo, getLoadingFilmPromo} from '../../store/reducers/promo-film/promo-film-selectors';
import withCountFilms from '../../hocs/with-count-films/with-count-films';
import {triggerLoadPromoFilm} from '../../store/actions/promo-film-actions';
import { IFilm } from '../../models/models';
import { AppDispatch } from '../..';
import { RootState } from '../../store/reducers/root-reducer';

const ContentWithCount = withCountFilms(Content);

type Props = {
  randomFilm: IFilm;
  history: any;
  handlerSorted: (activeTag: string) => void;
  handleSelectedFilms: (film: IFilm) => void;
  tags: string[];
  activeTag: string;
  films: IFilm[];
  isLoading: boolean;
  filmPromo: IFilm | null;
  loadFilmPromo: () => void;
  isLoadingFilmPromo: boolean;
}


const Main: FC<Props> = (props) => {
  const {
    history,
    handlerSorted,
    tags,
    activeTag,
    films,
    isLoading,
    filmPromo,
    loadFilmPromo,
    isLoadingFilmPromo,
  } = props;

  useEffect(() => {
    loadFilmPromo();
  }, []);

  if (isLoading || isLoadingFilmPromo || !filmPromo) {
    return (
      <div style={{background: 'black', height: '100vh'}}>
        <Loading />
      </div>
    );
  }
  
  const {id, title, genre, background_image, poster_image} = filmPromo;

  const isInMyLyst = !id ? (
    <React.Fragment>
      <svg viewBox="0 0 18 14" width="18" height="14">
        <use xlinkHref="#in-list"></use>
      </svg>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src={`${background_image}`} alt={`${title}`} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header />

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src={poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Genre: {genre}</span>
                {/* <span className="movie-card__year">Year: {years}</span> */}
              </p>

              <div className="movie-card__buttons">
                <Link to={`player/${id}`} className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button className="btn btn--list movie-card__button" type="button">
                  {isInMyLyst}
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContentWithCount
        history={history}
        handlerSorted={handlerSorted}
        tags={tags}
        // handleSelectedFilms={handleSelectedFilms}
        activeTag={activeTag}
        films={films}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};


const mapStateToProps = (state: RootState) => ({
  filmPromo: getFilmPromo(state),
  isLoadingFilmPromo: getLoadingFilmPromo(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadFilmPromo: () => {
    dispatch(triggerLoadPromoFilm());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
