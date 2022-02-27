import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
    cities,
    addCity
} from "./sagas";

import * as reducers from "./reducers";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["cities"]
}

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const weatherStore = () => {
    const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
    sagaMiddleware.run(addCity);
    sagaMiddleware.run(cities);
    return store;
}

export default weatherStore;