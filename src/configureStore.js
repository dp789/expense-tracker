/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createRootReducer from "./reducer";
import { createInjectorsEnhancer } from "redux-injectors";

// redux persit configuration
const persistConfig = {
  version: 1,
  key: "root",
  blacklist: ["router"],
  storage,
};

const persistedReducer = persistReducer(persistConfig, createRootReducer());

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;
  const reduxSagaMonitorOptions = {};

  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
    }
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

  const middlewares = [sagaMiddleware, routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];
  const runSaga = sagaMiddleware.run;
  const injectEnhancer = createInjectorsEnhancer({
    createReducer: createRootReducer,
    runSaga,
  });

  const store = createStore(
    persistedReducer,
    initialState,
    composeEnhancers(...enhancers, injectEnhancer)
  );
  const persistor = persistStore(store);

  store.runSaga = sagaMiddleware.run;
  store.injectedReducers = {};
  store.injectedSagas = {};

  return { store, persistor };
}
