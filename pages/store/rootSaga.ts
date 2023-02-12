import { all, fork } from 'redux-saga/effects';

import priceSaga from './price/saga';

export function* rootSaga(){
    yield all([fork(priceSaga)]);
}