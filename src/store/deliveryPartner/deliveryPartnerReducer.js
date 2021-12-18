import {
  GET_ALL_DELIVERY_PARTNERS,
  GET_ALL_DELIVERY_PARTNERS_FAILED,
} from "./types";
const initialState = {
  deliveryPartners: null,
  loading: true,
  errors: {},
};

const delivery = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ALL_DELIVERY_PARTNERS:
      return {
        ...state,
        deliveryPartners: payload,
        loading: false,
      };

    case GET_ALL_DELIVERY_PARTNERS_FAILED:
      return {
        deliveryPartners: null,
        loading: false,
        errors: payload,
      };

    default:
      return state;
  }
};

export default delivery;
