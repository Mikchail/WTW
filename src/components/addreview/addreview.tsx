import React, {FC} from 'react';
import Header from '../header/header';
import {useComment} from '../../hooks/useComment';
import history from '../../history';
import Loading from '../loading/loading';

const ReviewLength = {
  MIN: 50,
  MAX: 400,
};

type Props = {
  selectedID: number,
};

const AddReview: FC<Props> = ({selectedID}) => {
  const {isLoading, selectedFilm, comment, rating, onChangeComment, onChangeReview, onSubmitReview, sendingComment} =
    useComment({
      selectedID,
    });

  const ratingArray = [1, 2, 3, 4, 5];

  const isValidReview = rating && comment ? false : true;
  const isSendingReview = () => {
    if (sendingComment.sendingIsDone) {
      history.goBack();
    }
    if (sendingComment.commentsIsSending && !sendingComment.sendingIsError) {
      return ``;
    } else if (sendingComment.commentsIsSending && sendingComment.sendingIsError) {
      return `Sending review can't be done ,Something went wrong`;
    }
    return null;
  };
  const isBlocked = sendingComment.commentsIsSending && !sendingComment.sendingIsError ? true : false;
  if (!selectedFilm) {
    return null;
  }
  if (isLoading) {
    return <Loading />;
  }
  return (
    <section style={{backgroundColor: selectedFilm.background_color}} className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={`${selectedFilm.background_image}`} alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header id={+selectedID} />

        <div className="movie-card__poster movie-card__poster--small">
          <img src={`${selectedFilm.poster_image}`} alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form" onSubmit={onSubmitReview}>
          <div className="rating">
            <div key={rating} className="rating__stars">
              {ratingArray.map((item) => {
                const checked = +rating === item ? true : false;
                return (
                  <React.Fragment key={item}>
                    <input
                      onChange={onChangeReview}
                      className="rating__input"
                      id={`star-${item}`}
                      type="radio"
                      name="rating"
                      value={`${item}`}
                      checked={checked}
                    />
                    <label className="rating__label" htmlFor={`star-${item}`}>
                      Rating {item}
                    </label>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              disabled={isBlocked}
              onChange={onChangeComment}
              minLength={ReviewLength.MIN}
              maxLength={ReviewLength.MAX}
              className="add-review__textarea"
              name="comment"
              id="review-text"
              placeholder="Review text"
            ></textarea>
            <div className="add-review__submit">
              <button disabled={isValidReview || isBlocked} className="add-review__btn" type="submit">
                Post
              </button>
            </div>
          </div>
          {isSendingReview()}
        </form>
      </div>
    </section>
  );
};

export default AddReview;
