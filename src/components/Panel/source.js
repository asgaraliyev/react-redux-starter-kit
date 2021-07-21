import store from '../../redux/index';

window.__proto__.panel = function (data) {
   store.dispatch({ type: 'active', data });
};