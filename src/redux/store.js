import thunk from 'redux-thunk';
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit';
import rockets from './rocketsSlice';
import mission from './missionsSlice';

const reducers = combineReducers({
  rocketsReducer: rockets,
  missionReducer: mission,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
