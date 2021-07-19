import Home from "../pages/Home";
import Login from "../pages/Login";
import Main from '../layouts/Main';
import Auth from '../layouts/Auth';

/**
 * UnAuthenticatedRouters: These routers are only available for logged users. (Tip: We can change the name to Private routers )
 */
const UnAuthenticatedRouters = [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: Main
  },
];


/**
 * UnAuthenticatedRouters: These routers are available for all users. (Tip: We can change the name to Public routers )
 */
const AuthenticatedRouters = [
  {
    path: "/login",
    exact: true,
    component: Login,
    layout: Auth
  },
];

export {UnAuthenticatedRouters, AuthenticatedRouters}
