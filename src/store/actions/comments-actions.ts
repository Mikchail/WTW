import { IComment, IReview } from "../../models/models";

export const SET_LOADING_COMMENTS = `SET_LOADING_COMMENTS` as const ;
export const SET_SENDING_COMMENTS = `SET_SENDING_COMMENTS` as const ;
export const SEND_COMMENT_DONE = `SEND_COMMENT_DONE` as const ;
export const SEND_COMMENT_ERROR = `SEND_COMMENT_ERROR` as const ;
export const SET_ERROR_LOAD_COMMENTS = `LOAD_COMMENTS_ERROR` as const ;
export const LOAD_COMMENTS = `LOAD_COMMENTS` as const ;

export const TRIGGER_SEND_COMMENT = `TRIGGER_SEND_COMMENT` as const ;
export const TRIGGER_LOADING_COMMENT = `TRIGGER_LOADING_COMMENT` as const ;

export const triggerSendComment = (payload: {comment: IComment, filmID: number}) => ({
  type: TRIGGER_SEND_COMMENT,
  payload
});

export const triggerLoadingComments = (payload: {filmID: number}) => ({
  type: TRIGGER_LOADING_COMMENT,
  payload
});

// loading comments
export const setloadingComments = (payload: boolean) => ({
  type: SET_LOADING_COMMENTS,
  payload,
});

export const loadedComments = (comments: IReview[]) => ({
  type: LOAD_COMMENTS,
  payload: comments,
});

export const setErrorLoadComment = (error: boolean) => ({
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

export type TypeCommentActions =
  | ReturnType<typeof setloadingComments>
  | ReturnType<typeof loadedComments> 
  | ReturnType<typeof setErrorLoadComment>
  | ReturnType<typeof setSendCommentError>
  | ReturnType<typeof setSendCommentDone>
  | ReturnType<typeof setSendingComment>
  | ReturnType<typeof triggerSendComment>
