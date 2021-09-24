import React, { FC } from 'react';
import {connect} from 'react-redux';

import {deleteFilm, selectedFilm} from '../../../store/actions/shown-film-actions';
import {getUser} from '../../../store/reducers/user/user-selector';
import {getSimilarFilms, getFilmById} from '../../../store/reducers/films/films-selectors';
import {getSelectedFilms, hasSelectedFilms} from '../../../store/reducers/shown-films/shown-films-selector';

import Header from '../../header/header';
import MovieTabBar from './movie-tab-bar-nav';
import MovieDetails from './movie-details';
import MovieReview from './movie-review';
import MovieOverview from './movie-overview';
import Footer from '../../footer/footer';
import MyListButton from '../../my-list-button/my-list-button';
import CatalogList from '../../catalog-list/catalog-list';
import { IFilm } from '../../../models/models';
import { RootState } from '../../../store/reducers/root-reducer';
import { AppDispatch } from '../../..';

type Props = {
  film: IFilm,
  history: any,
  selectedID: number,
  isSelect: boolean,
  similarFilms: IFilm[],
};

const MoviePage: FC<Props> = (props) => {
  const {film, history, selectedID, similarFilms} = props;

  return (
    <>
      <section className="movie-card movie-card--full" style={{background: `${film.background_color}`}}>
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={film.background_image} alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>
          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{film.title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{film.genre}</span>
                <span className="movie-card__year">{film.year}</span>
              </p>

              <div className="movie-card__buttons">
                <button
                  onClick={() => history.push(`/player/${selectedID}`)}
                  className="btn btn--play movie-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <MyListButton isFavorite={film.isFavorite} film={film} />

                <a
                  onClick={(event) => {
                    event.preventDefault();
                    history.push(`/films/${selectedID}/review`);
                  }}
                  href="add-review.html"
                  className="btn movie-card__button"
                >
                  Add review
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={film.poster_image} alt={film.title} width="218" height="327" />
            </div>

            <MovieTabBar film={film}>
              <MovieOverview label="Overview" />
              <MovieDetails label="Details" />
              <MovieReview label="Review" />
            </MovieTabBar>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <CatalogList films={similarFilms} />
        </section>

        <Footer />
      </div>
    </>
  );
};

const mapStateToProps = (state: RootState, props: {selectedID: number}) => ({
  user: getUser(state),
  selectedFilms: getSelectedFilms(state),
  isSelect: hasSelectedFilms(state),
  film: getFilmById(state, props),
  similarFilms: getSimilarFilms(state, props.selectedID),
});

const mapDispatchToProps = (dispaptch: AppDispatch) => ({
  addFilm: (film: IFilm) => {
    dispaptch(selectedFilm(film));
  },
  removeFilm: (film: IFilm) => {
    dispaptch(deleteFilm(film));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
