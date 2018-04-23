import { createHashHistory } from "history";
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from "react-router-redux";
import storage from 'redux-persist/lib/storage'


import reducers from "../reducers";
import { rootSaga } from "../sagas"



const persistedReducer = persistReducer({ key: "app", storage }, reducers)

export const history = createHashHistory();
const routeMiddleware = routerMiddleware(history)

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, routeMiddleware];


export const store = createStore(
    persistedReducer,
    applyMiddleware(...middleware),
);

export const persister = persistStore(store)


sagaMiddleware.run(rootSaga)