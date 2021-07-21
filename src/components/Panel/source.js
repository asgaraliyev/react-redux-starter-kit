import store from '../../redux/index';
const dispatch = store.dispatch();

window.__proto__.panel = function (data) {
  dispatch({ type: 'active', data });
};
