import {
  FETCH_ALL_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  ADD_COMMENT,
  COMMENTS_LOADING,
  GET_COMMENT_BY_ID,
  GET_COMMENT_BY_ID_FAILED,
  ADD_COMMENT_FAILED,
} from "../actions/actiontypes.js";

export const initialState = {
  loading: false,
  tickets: [],
  comments: [],
  error: "",
};

export const TicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_TICKETS:
      return {
        ...state,
        loading: true,
      };

    case FETCH_TICKETS_SUCCESS:
      return {
        loading: false,
        tickets: action.payload,
        error: "",
      };

    case FETCH_TICKETS_FAILURE:
      return {
        loading: false,
        tickets: [],
        error: action.payload,
      };

    case COMMENTS_LOADING:
      return {
        loading: true,
      };

    case GET_COMMENT_BY_ID:
      return {
        ...state,
        comments: action.payload,
        error: null,
        loading: false,
      };

    case GET_COMMENT_BY_ID_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ADD_COMMENT:
      return {
        ...state,
        loading: false,
        comments: action.payload,
        error: null,
      };

    case ADD_COMMENT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
