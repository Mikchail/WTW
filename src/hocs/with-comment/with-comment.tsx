import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {getFilmById, getIsLoading} from '../../store/reducers/films/films-selectors';
import Loading from '../../components/loading/loading';
import { triggerSendComment } from '../../store/actions/comments-actions';
import { triggerLoadFilms } from '../../store/actions/films-actions';
import { IComment, IFilm } from '../../models/models';
import { RootState } from '../../store/reducers/root-reducer';
import { AppDispatch } from '../..';

type Props = {
    selectedFilm: IFilm;
    iSLoading: boolean;
    handleSubmitReview: (id: number, review: IComment) => void;
    loadFilms: () => void;
    sendingComment: {
      sendingIsDone: boolean;
      commentIsSinding: boolean;
      sendingIsError: boolean;
    }
}

type State = {
  comment: string | null;
  rating: number | null;
}


const withComment = <BaseProps extends Props>(Component: React.ComponentType<BaseProps>) => {
  class WithComment extends PureComponent<BaseProps & Props,State> {
    protected ratingArray: number[] = [];

    constructor(props: BaseProps & Props) {
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

    _handleChangeRating(event: React.ChangeEvent<HTMLInputElement>) {
      event.preventDefault();
      const rating = +event.target.value;
      this.setState({
        rating,
      });
    }

    _handleChangeComment(event: React.ChangeEvent<HTMLInputElement>) {
      event.preventDefault();
      const comment = event.target.value;
      this.setState({
        comment,
      });
    }

    _handleSubmitReview(event: React.ChangeEvent<HTMLButtonElement>): void {
      const {selectedFilm, handleSubmitReview} = this.props;
      const {comment, rating} = this.state;
      event.preventDefault();
      if(!comment || !rating){
        throw new Error("need to fill")
      }
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
          rating={rating}
          selectedFilm={selectedFilm}
          comment={comment}
          onChangeComment={this._handleChangeComment}
          onChangeReview={this._handleChangeRating}
          onSubmitReview={this._handleSubmitReview}
        />
      );
    }
  }

  return WithComment;
};

const mapStateToProps = (state: RootState, props: {selectedID: number}) => ({
  selectedFilm: getFilmById(state, props),
  iSLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  handleSubmitReview(filmID: number, review: IComment) {
    dispatch(triggerSendComment({review, filmID}));
  },
  loadFilms() {
    dispatch(triggerLoadFilms());
  },
});

export {withComment};
export default (Component: React.ComponentType<any>) => connect(mapStateToProps, mapDispatchToProps)(withComment(Component));

