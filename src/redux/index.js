import { createStore, combineReducers } from 'redux';
import modal from './reducers/Modal';
const root = combineReducers({ modal });
const store = createStore(root, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// TODO:add reducers here
export default store;
