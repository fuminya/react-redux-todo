import { combineReducers } from 'redux';
import todos from './todos';

// 複数のreducersを結合
const todoApp = combineReducers({ todos });
export default todoApp;