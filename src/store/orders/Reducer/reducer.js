
import{FETCH_ORDER_REQUEST,FETCH_ORDER_SUCCESS,FETCH_ORDER_FAILURE} from '../actions/actiontypes';


export const initialState={
    loading:false,
    orders:[],
    errror:''
}

export const OrderReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_ORDER_REQUEST:
            return {
                ...state,
                loading:true
    
            }
            case FETCH_ORDER_SUCCESS:
                return {
                    loading:false,
                    orders:action.payload,
                    error:''
        
                }
                case FETCH_ORDER_FAILURE:
                    return {
                        loading:false,
                        orders:[],
                        error:action.payload
            
                    }
         default:
            return state;
    }
};
