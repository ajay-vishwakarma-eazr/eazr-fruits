
import{FETCH_PRODUCT_FAILURE,FETCH_PRODUCT_SUCCESS,FETCH_PRODUCT_REQUEST} from '../actions/actiontypes';


export const initialState={
    loading:false,
    products:[],
    errror:''
}

export const ProductReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading:true
    
            }
            case FETCH_PRODUCT_SUCCESS:
                return {
                    loading:false,
                    products:action.payload,
                    error:''
        
                }
                case FETCH_PRODUCT_FAILURE:
                    return {
                        loading:false,
                        products:[],
                        error:action.payload
            
                    }
         default:
            return state;
    }
};
