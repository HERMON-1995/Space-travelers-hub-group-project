import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import rockets from './rocketsSlice';

const reducers = combineReducers({
  rocketsReducer: rockets,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
