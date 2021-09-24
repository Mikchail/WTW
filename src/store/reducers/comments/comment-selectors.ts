import NameSpace from '../../name-space';


export const getFilmComments = (state) => state[NameSpace.DATA].comments;

export const sendCommentStatus = (state) => ({
  commentsIsSending: state[NameSpace.COMMENTS].sendingComment,
  sendingIsDone: state[NameSpace.COMMENTS].sendCommentDone,
  sendingIsError: state[NameSpace.COMMENTS].sendCommentError,
});

export const getCommetsStatus = (state) => ({
  commentsIsLoading: state[NameSpace.COMMENTS].loadingComments,
  loadingIsError: state[NameSpace.COMMENTS].loadCommentsError,
});
