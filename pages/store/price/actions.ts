import { 
    GET_PRICE_REQUEST,
    GET_PRICE_SUCCESS,
    GET_PRICE_FAILURE
} from './actionTypes';

import {
    GetPriceRequestPayload,
    GetPriceSuccessPayload,
    GetPriceFailurePayload,
    PriceRequest,
    PriceSuccess,
    PriceFailure
} from './types';

export const priceRequest = (params: GetPriceRequestPayload) : PriceRequest => {
    return {
        type: GET_PRICE_REQUEST,
        params
    }
}

export const priceSuccess = (params: GetPriceSuccessPayload) : PriceSuccess =>({
    type: GET_PRICE_SUCCESS,
    params
})

export const priceFailure = (params: GetPriceFailurePayload) : PriceFailure =>({
    type: GET_PRICE_FAILURE,
    params
})

