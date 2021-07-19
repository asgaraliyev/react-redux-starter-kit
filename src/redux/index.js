import { createStore, combineReducers } from 'redux';
import AlertReducer from './reducers/AlertReducer';
const root = combineReducers({ AlertReducer });
const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// TODO:add reducers here
export default store;
