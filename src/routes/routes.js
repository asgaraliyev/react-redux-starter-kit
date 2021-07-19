import Home from '../pages/Home';
import Login from '../pages/Login';
import Main from '../layouts/Main';
import Auth from '../layouts/Auth';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Private from '../routes/Private';
import Public from '../routes/Public';
import NotFound from '../pages/NotFound';
const layouts = [
  {
    layout: Main,
    pages: [
      {
        path: '/home',
        title: 'Home',
        mode: Private,
        component: Home,
      },
      {
        path: '/profile',
        title: 'Profile',
        mode: Private,
        component: Profile,
      },
      {
        path:"/not-found",
        title:"Not Found",
        mode:Public,
        component:NotFound,
      }
    ],
  },
  {
    layout: Auth,
    pages: [
      {
        path: '/login',
        title: 'Login',
        mode: Public,
        component: Login,
      },
      {
        path: '/sign-up',
        title: 'Sign Up',
        mode: Public,
        component: SignUp,
      },
    ],
  },
];

export default layouts;
