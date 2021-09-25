import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {IComment} from '../models/models';
import {triggerSendComment} from '../store/actions/comments-actions';
import {sendCommentStatus} from '../store/reducers/comments/comment-selectors';
import {getFilmById, getIsLoading} from '../store/reducers/films/films-selectors';
import {useTypedSelector} from './useTypedSelector';

type Props = {
  selectedID: number,
};

export const useComment = (props: Props) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const selectedFilm = useTypedSelector((state) => getFilmById(state, {selectedID: props.selectedID}));
  const sendingComment = useTypedSelector(sendCommentStatus);
  const isLoading = useSelector(getIsLoading);
  const dispatch = useDispatch();

  const handleSubmit = (filmID: number, review: IComment) => {
    dispatch(triggerSendComment({review, filmID}));
  };

  const handleChangeRating = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const rating = +event.target.value;
    setRating(rating);
  };

  const handleChangeComment = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    event.preventDefault();
    const comment = event.target.value;
    setComment(comment);
  };

  const handleSubmitReview = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!comment || !rating) {
      return;
    }

    handleSubmit(props.selectedID, {
      rating,
      comment,
    });

    setComment('');
    setRating(0);
  };

  return {
    rating,
    comment,
    selectedFilm,
    isLoading,
    sendingComment,
    onChangeComment: handleChangeComment,
    onChangeReview: handleChangeRating,
    onSubmitReview: handleSubmitReview,
  };
};
