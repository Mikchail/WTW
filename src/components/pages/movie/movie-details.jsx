import React from 'react';
import PropTypes from 'prop-types';

const MovieDetails = (props) => {
  const {label, activeTab} = props;
  const checked = label === activeTab;
  return (
    <React.Fragment>
      {checked && (
        <div className="movie-card__reviews movie-card__row">
          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Director</strong>
              <span className="movie-card__details-value">Wes Andreson</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Starring</strong>
              <span className="movie-card__details-value">
                Bill Murray, <br />
                Edward Norton, <br />
                Jude Law, <br />
                Willem Dafoe, <br />
                Saoirse Ronan, <br />
                Tony Revoloru, <br />
                Tilda Swinton, <br />
                Tom Wilkinson, <br />
                Owen Wilkinson, <br />
                Adrien br/ody, <br />
                Ralph Fiennes, <br />
                Jeff Goldblum
              </span>
            </p>
          </div>

          <div className="movie-card__text-col">
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Run Time</strong>
              <span className="movie-card__details-value">1h 39m</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Genre</strong>
              <span className="movie-card__details-value">Comedy</span>
            </p>
            <p className="movie-card__details-item">
              <strong className="movie-card__details-name">Released</strong>
              <span className="movie-card__details-value">2014</span>
            </p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

MovieDetails.propTypes = {
  label: PropTypes.string,
  activeTab: PropTypes.string,
};

export default MovieDetails;
