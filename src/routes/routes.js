import Home from '../pages/Home';
import Login from '../pages/Login';
import Main from '../layouts/Main';
import Auth from '../layouts/Auth';
export default [
  {
    component: Home,
    path: '/home',
    isPrivate: true,
    layout: Main,
    lyt:"main"
  },
  {
    component: Login,
    path: '/login',
    isPrivate: false,
    layout: Auth,
    lyt:"auth"
  },
];
