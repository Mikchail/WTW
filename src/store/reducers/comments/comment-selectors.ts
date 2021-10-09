import { IReview } from '../../../models/models';
import NameSpace from '../../name-space';
import { RootState } from '../root-reducer';


export const getFilmComments = (state: RootState): IReview[] | null => state[NameSpace.COMMENTS].comments;

export const sendCommentStatus = (state: RootState) => ({
  commentsIsSending: state[NameSpace.COMMENTS].sendingComment,
  sendingIsDone: state[NameSpace.COMMENTS].sendCommentDone,
  sendingIsError: state[NameSpace.COMMENTS].sendCommentError,
});

export const getCommetsStatus = (state: RootState) => ({
  commentsIsLoading: state[NameSpace.COMMENTS].loadingComments,
  loadingIsError: state[NameSpace.COMMENTS].loadCommentsError,
});
