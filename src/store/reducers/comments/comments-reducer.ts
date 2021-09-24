import {extend} from '../../../utils';
import {
  SET_LOADING_COMMENTS,
  LOAD_COMMENTS,
  SET_ERROR_LOAD_COMMENTS,
  SEND_COMMENT_DONE,
  SEND_COMMENT_ERROR,
} from '../../actions/comments-actions';

const initialState = {
  comments: false,
  loadingComments: true,
  loadCommentsError: false,
};

export const reducer = (state = initialState, action) => {
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
