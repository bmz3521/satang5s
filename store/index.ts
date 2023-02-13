import { configureStore, applyMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';// open during use

import rootReducer from './rootReducer';
import { rootSaga } from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
    },
});

sagaMiddleware.run(rootSaga);

export default store;