// @flow
import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
// $FlowFixMe
import storage from 'redux-persist/lib/storage';
import { allReducers } from 'reducers/index';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducers);

const store = createStore(persistedReducer, window.START_FROM_SERVER);

export const persistor = persistStore(store);
export default store;
