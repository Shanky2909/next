import { combineReducers, configureStore } from '@reduxjs/toolkit';
import HomeReducer from './reducers/homeReducer';
import thunk from 'redux-thunk';

const middleWare = [thunk];

const allReducers = combineReducers({ home: HomeReducer });

export const store = configureStore({ reducer: allReducers });
