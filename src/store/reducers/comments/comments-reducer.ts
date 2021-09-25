import { IReview } from '../../../models/models';
import {extend} from '../../../utils';
import {
  SET_LOADING_COMMENTS,
  LOAD_COMMENTS,
  SET_ERROR_LOAD_COMMENTS,
  SEND_COMMENT_DONE,
  SEND_COMMENT_ERROR,
  TypeCommentActions,
} from '../../actions/comments-actions';

const initialState = {
  comments: null as IReview[] | null,
  loadingComments: true,
  loadCommentsError: false,
  sendingComment: false,
  sendCommentDone: false,
  sendCommentError: false,
};

type InitialState = typeof initialState;

export const reducer = (state: InitialState = initialState, action: TypeCommentActions): InitialState => {
  switch (action.type) {
    case SET_LOADING_COMMENTS:
      return extend(state, {
        loadingComments: action.payload,
      });
    case LOAD_COMMENTS:
      return extend(state, {
        comments: action.payload,
      });
    case SET_ERROR_LOAD_COMMENTS:
      return extend(state, {
        loadCommentsError: action.payload,
      });
    case SEND_COMMENT_DONE:
      return extend(state, {
        sendCommentDone: action.payload,
      });
    case SEND_COMMENT_ERROR:
      return extend(state, {
        sendCommentError: action.payload,
      });
    default:
      return state;
  }
};
