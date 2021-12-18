import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";

import rootReducer from "./reducers";
// import rootSaga from './sagas';

import { persistStore, persistReducer } from "redux-persist"; // imports from redux-persist
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { batchedSubscribe } from "redux-batched-subscribe";
import { debounce } from "lodash";




const persistConfig = {
  // configuration object for redux-persist
  key: "root",

  storage, // define which storage to use
  whitelist: ["auth", "partners", "partnerModules"],
  //stateReconciler: hardSet,
};

const persistedReducer = persistReducer(persistConfig, rootReducer) // create a persisted reducer
const initialState = {};
const middleware = [ReduxThunk];

const store = createStore(
  persistedReducer, // pass the persisted reducer instead of rootReducer to createStore
  // rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };

// // const sagaMiddleware = createSagaMiddleware();
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(ReduxThunk))
// );
// // sagaMiddleware.run(rootSaga);

// export default store;
