
import { act } from 'react-dom/test-utils';
import { FETCH_MODULE_FAILURE, FETCH_MODULE_REQUEST, FETCH_MODULE_SUCCESS } from '../actions/actiontypes';

export const initialState = {
    loading: false,
    modules: {},
    errror: '',
    
}

export const partnerModuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MODULE_REQUEST:
            return {
                ...state,
                loading: true

            }
        case FETCH_MODULE_SUCCESS:
            return {
                ...state,
                loading: false,
                modules: action.payload,
                error: null

            }
        case FETCH_MODULE_FAILURE:
            return {
                ...state,
                loading: false,
                modules: [],
                error: action.payload

            }





        default:
            return state;
    }
};
