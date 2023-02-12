import { 
    GET_PRICE_REQUEST,
    GET_PRICE_SUCCESS,
    GET_PRICE_FAILURE
} from './actionTypes';

import { PriceActions, PriceState } from './types';

const initialState: PriceState = {
    lastPrice : 0,
    symbol : '',
    volume : 0,
    error : null,
    pending : false
}

const reducers = (state = initialState, action: PriceActions) => {
    switch(action.type){
        case GET_PRICE_REQUEST:
            return {
                ...state,
                pending : true
            }
        case GET_PRICE_FAILURE:
            return {
                ...state,
                pending : false,
                error : action.params.error

            }
        case GET_PRICE_SUCCESS:
            return {
                ...state,
                pending : false,
                error : null
            }
        default:
            return {
                ...state,
            }
    }
}

export default reducers;