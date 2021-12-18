
import{FETCH_SETTLEMENT_FAILURE,FETCH_SETTLEMENT_SUCCESS,FETCH_SETTLEMENT_REQUEST} from '../actions/actiontypes';


export const initialState={
    loading:false,
    settlements:[],
    errror:''
}

export const SettlementReducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_SETTLEMENT_REQUEST:
            return {
                ...state,
                loading:true
    
            }
            case FETCH_SETTLEMENT_SUCCESS:
                return {
                    loading:false,
                    settlements:action.payload,
                    error:''
        
                }
                case FETCH_SETTLEMENT_FAILURE:
                    return {
                        loading:false,
                        settlements:[],
                        error:action.payload
            
                    }
         default:
            return state;
    }
};
