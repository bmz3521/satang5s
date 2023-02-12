import { combineReducers } from "redux";

import priceReducer from './price/reducer' ;

const rootReducer = combineReducers({
    price: priceReducer,
});

export type PriceState = ReturnType<typeof rootReducer>;

export default rootReducer;