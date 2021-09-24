
export const SET_LOADING_COMMENTS = `SET_LOADING_COMMENTS`;
export const SET_SENDING_COMMENTS = `SET_SENDING_COMMENTS`;
export const SEND_COMMENT_DONE = `SEND_COMMENT_DONE`;
export const SEND_COMMENT_ERROR = `SEND_COMMENT_ERROR`;
export const SET_ERROR_LOAD_COMMENTS = `LOAD_COMMENTS_ERROR`;
export const LOAD_COMMENTS = `LOAD_COMMENTS`;

export const TRIGGER_SEND_COMMENT = `TRIGGER_SEND_COMMENT`;
export const TRIGGER_LOADING_COMMENT = `TRIGGER_LOADING_COMMENT`;

export const triggerSendComment = (payload) => ({
  type: TRIGGER_SEND_COMMENT,
  payload
});

export const triggerLoadingComments = () => ({
  type: TRIGGER_LOADING_COMMENT,
});

// loading comments
export const setloadingComments = (payload: boolean) => ({
  type: SET_LOADING_COMMENTS,
  payload,
});

export const loadedComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: comments,
});

export const setErrorLoadComment = (error) => ({
  type: SET_ERROR_LOAD_COMMENTS,
  payload: error,
});


// send comment
export const setSendCommentError = (payload: boolean) => ({
  type: SEND_COMMENT_ERROR,
  payload,
});

export const setSendCommentDone = (payload: boolean) => ({
  type: SEND_COMMENT_DONE,
  payload,
});

export const setSendingComment = (payload: boolean) => ({
  type: SET_SENDING_COMMENTS,
  payload,
});