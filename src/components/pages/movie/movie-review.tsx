import React, {PureComponent} from 'react';
import {getCommetsStatus, getFilmComments} from '../../../store/reducers/comments/comment-selectors';
import {connect} from 'react-redux';
import {triggerLoadingComments} from '../../../store/actions/comments-actions';
import {IFilm, IReview} from '../../../models/models';
import { RootState } from '../../../store/reducers/root-reducer';
import { AppDispatch } from '../../..';

const getDateTime = (time: string) => {
  const date = new Date(time);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

type Props = {
  film?: IFilm,
  loadComments?: (film: IFilm) => void,
  comments?: IReview[] | null;
  selectedID?: number;
  activeTab?: string;
  label: string;
  loadingComments?: ReturnType<typeof getCommetsStatus>,
};

type State = {};

class MovieReview extends PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadComments(this.props.film);
  }

  componentDidUpdate(prevProps: Props) {
    if (this.props.comments !== prevProps.comments) {
      this.props.loadComments(this.props.film);
    }
  }

  render() {
    const {label, comments, activeTab} = this.props;
    const checked = label === activeTab;
    let filmOnePart: IReview[] = [];
    let filmTwoPart: IReview[] = [];
    if (comments) {
      const halfReview = Math.ceil(comments.length / 2);
      filmOnePart = comments.slice(0, halfReview);
      filmTwoPart = comments.slice(halfReview);
    }
    return (
      <React.Fragment>
        {comments && checked && (
          <div className="movie-card__reviews movie-card__row">
            <div className="movie-card__reviews-col">
              {filmOnePart.map((review) => {
                return (
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date">{getDateTime(review.date)}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                );
              })}
            </div>
            <div className="movie-card__reviews-col">
              {filmTwoPart.map((review) => {
                return (
                  <div className="review" key={review.id}>
                    <blockquote className="review__quote">
                      <p className="review__text">{review.comment}</p>

                      <footer className="review__details">
                        <cite className="review__author">{review.user.name}</cite>
                        <time className="review__date">{getDateTime(review.date)}</time>
                      </footer>
                    </blockquote>

                    <div className="review__rating">{review.rating}</div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  comments: getFilmComments(state),
  loadingComments: getCommetsStatus(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  loadComments(film: IFilm) {
    dispatch(triggerLoadingComments(film.id));
  },
});

export {MovieReview};
export default connect(mapStateToProps, mapDispatchToProps)(MovieReview);
