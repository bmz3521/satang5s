import { 
    GET_PRICE_REQUEST,
    GET_PRICE_SUCCESS,
    GET_PRICE_FAILURE
} from './actionTypes';

export interface PriceState {
    symbol: string;
    lastPrice: number;
    volume: number;
    pending : boolean;
    error: string | null;
}

export interface GetPriceRequestPayload {
    params : { symbol:string }
}

export interface GetPriceSuccessPayload {
    data: PriceState;
}

export interface GetPriceFailurePayload {
    error: string | null;
}

export interface PriceRequest {
    type : typeof GET_PRICE_REQUEST;
    params : GetPriceRequestPayload;
}

export type PriceSuccess = {
    type: typeof GET_PRICE_SUCCESS,
    params : GetPriceSuccessPayload
}

export type PriceFailure = {
    type: typeof GET_PRICE_FAILURE,
    params : GetPriceFailurePayload
}


export type PriceActions = PriceRequest | PriceSuccess | PriceFailure;