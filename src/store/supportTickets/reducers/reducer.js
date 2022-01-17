import {
  FETCH_ALL_TICKETS,
  FETCH_TICKETS_SUCCESS,
  FETCH_TICKETS_FAILURE,
  FETCH_TICKETS_LOADING,
} from "../actions/actiontypes.js";

export const initialState = {
  loading: false,
  tickets: [],
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
    default:
      return state;
  }
};
