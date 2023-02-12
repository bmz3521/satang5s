import { createSelector } from "reselect";

import { PriceState } from "../rootReducer";

const getPending = (state: PriceState) => state.price.pending;
const getError = (state: PriceState) => state.price.error;

export const getPendingSelector = createSelector(getPending, (pending)=> pending);

export const getErrorSelector = createSelector(getError, (error)=> error);