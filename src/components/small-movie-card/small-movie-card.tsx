import React, {PureComponent} from 'react';
import VideoPlayer from '../video-player/video-player';
import {IFilm} from '../../models/models';
import { Link } from 'react-router-dom';

type Props = {
  film: IFilm,
  isPlaying?: boolean,
  muted?: boolean,
  onIsPlayingChange?: (flag: boolean) => void,
  handleSelectedFilms?: (film: IFilm) => void,
  history: any,
};

type State = {};

class SmallMovieCard extends PureComponent<Props, State> {
  protected timeout: NodeJS.Timeout | null;

  constructor(props: Props) {
    super(props);
    this.timeout = null;
  }

  componentWillUnmount() {
    if(this.timeout){
      clearTimeout(this.timeout);
    }
  }

  render() {
    const {film, isPlaying, onIsPlayingChange, handleSelectedFilms, history, muted} = this.props;
    return (
      <article
        onMouseEnter={() => {
          this.timeout = global.setTimeout(() => {
            onIsPlayingChange && onIsPlayingChange(true);
          }, 1000);
        }}
        onMouseLeave={() => {
          if(this.timeout) {
            clearTimeout(this.timeout);
          }
          onIsPlayingChange && onIsPlayingChange(false);
        }}
        onClick={() => {
          handleSelectedFilms && handleSelectedFilms(film);
          history.push(`/films/${film.id}`);
        }}
        className="small-movie-card catalog__movies-card"
      >
        <div className="small-movie-card__image">
          <VideoPlayer poster={film.src} muted={!!muted ? true : false} isPlaying={!!isPlaying} src={film.srcMovie} />
        </div>
        <h3 className="small-movie-card__title">
          <Link
            to={`/player/${film.id}`}
            onClick={(event) => event.preventDefault()}
            className="small-movie-card__link"
            href="#"
          >
            {film.title}
          </Link>
        </h3>
      </article>
    );
  }
}

export default SmallMovieCard;
