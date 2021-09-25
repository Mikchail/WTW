import React, { FC } from 'react';
import { IFilm } from '../../../models/models';

type Props = {
  label: string,
  activeTab?: string,
  film?: IFilm
};

const MovieOverview: FC<Props> = (props) => {
  const {label, activeTab, film} = props;
  const checked = label === activeTab;
  return (
    <React.Fragment>
      {checked && film && (
        <React.Fragment>
          <div className="movie-rating">
            <div className="movie-rating__score">{film.rating}</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">Very good</span>
              <span className="movie-rating__count">{film.run_time} ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>{film.description}</p>

            <p className="movie-card__director">
              <strong>Director: {film.director}</strong>
            </p>

            <p className="movie-card__starring">
              <strong>
                Starring: {film.starring.map((it, index, array) => it + `${index === array.length - 1 ? `` : `, `}`)}
              </strong>
            </p>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default MovieOverview;
