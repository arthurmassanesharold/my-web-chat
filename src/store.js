// @flow
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
// $FlowFixMe
import storage from 'redux-persist/lib/storage';
import { allReducers } from 'reducers/index';
import rootSaga from 'sagas';

export const history = createBrowserHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routerMiddleware(history)];
const enhancer = composeWithDevTools({
  // Options: https://github.com/jhen0409/react-native-debugger#options
})(applyMiddleware(...middlewares));

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, window.START_FROM_SERVER, enhancer);

export const persistor = persistStore(store);
export default store;

sagaMiddleware.run(rootSaga);
