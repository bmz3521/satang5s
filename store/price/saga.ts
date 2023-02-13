import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
    priceSuccess,
    priceFailure,
} from './actions';
import { PriceState } from './types';
import { 
    GET_PRICE_REQUEST,
} from './actionTypes';

export const getPrice = async (params:{ symbol:string }) => {
    const { data } = await axios.get<PriceState>(
        `https://satangcorp.com/api/v3/ticker/24hr?symbol=${params.symbol || 'btc_thb'}`,
        );
        return data
    }
    
    //------------------------------------------ saga --------------------------------
    
    function* priceRequestSaga(action:any){
    try{
        const response:{data:PriceState} = yield call(getPrice, action.params);
        yield put(priceSuccess(response));
    }catch (e : any) {
        yield put(priceFailure({
            error : e
        }))
    }
}

function* priceSaga() {
    yield all([takeLatest(GET_PRICE_REQUEST, priceRequestSaga)])
}

export default priceSaga;