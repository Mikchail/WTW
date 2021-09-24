import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getFilmById, getIsLoading} from '../../store/reducers/films/films-selectors';
import Loading from '../../components/loading/loading';
import { triggerSendComment } from '../../store/actions/comments-actions';
import { triggerLoadFilms } from '../../store/actions/films-actions';
import { IFilm } from '../../models/models';

type Props = {
    selectedFilm: IFilm;
    iSLoading: boolean;
    handleSubmitReview: (id: number, { comment, rating}: { comment: string , rating: number}) => void,
    loadFilms: () => void,
}

type State = {
  comment: string | null;
  rating: number | null;
}


const withComment = (Component) => {
  class WithComment extends PureComponent<Props,State> {
    private ratingArray: number[];

    constructor(props) {
      super(props);
      this.state = {
        rating: null,
        comment: null,
      };
      this.ratingArray = [1, 2, 3, 4, 5];
      this._handleChangeRating = this._handleChangeRating.bind(this);
      this._handleChangeComment = this._handleChangeComment.bind(this);
      this._handleSubmitReview = this._handleSubmitReview.bind(this);
    }

    _handleChangeRating(event) {
      event.preventDefault();
      const rating = event.target.value;
      this.setState({
        rating,
      });
    }

    _handleChangeComment(event) {
      event.preventDefault();
      const comment = event.target.value;
      this.setState({
        comment,
      });
    }

    _handleSubmitReview(event) {
      const {selectedFilm, handleSubmitReview} = this.props;
      const {comment, rating} = this.state;
      event.preventDefault();
      handleSubmitReview(selectedFilm.id, {
        rating,
        comment,
      });
    }

    componentDidMount() {
      const {loadFilms} = this.props;
      loadFilms();
    }

    render() {
      const {comment, rating} = this.state;
      const {selectedFilm, iSLoading} = this.props;
      if (!iSLoading) {
        return <Loading />;
      }
      return (
        <Component
          {...this.props}
          comment={comment}
          rating={rating}
          selectedFilm={selectedFilm}
          onChangeComment={this._handleChangeComment}
          onChangeReview={this._handleChangeRating}
          onSubmitReview={this._handleSubmitReview}
        />
      );
    }
  }
  return WithComment;
};

const mapStateToProps = (state, props) => ({
  selectedFilm: getFilmById(state, props),
  iSLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  handleSubmitReview(review, id) {
    dispatch(triggerSendComment({review, id}));
  },
  loadFilms() {
    dispatch(triggerLoadFilms());
  },
});

export {withComment};
export default (Component) => connect(mapStateToProps, mapDispatchToProps)(withComment(Component));

