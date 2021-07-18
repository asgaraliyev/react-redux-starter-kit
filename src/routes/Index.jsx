import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../layouts/Main';
import Auth from '../layouts/Auth';
import routes from './routes';
import Private from './Private';
import Public from './Public';
export default function Index() {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth>
            {routes.map(({ path, lyt, component: Component, ...rest }, i) => {
              if (lyt === 'auth') {
                console.log(path);
                return (
                  <Public key={i} {...rest}>
                    <Component />
                  </Public>
                );
              }
            })}
          </Auth>
        </Route>
        <Route path="/main">
          <Main>
            {routes.map(({ path, lyt, component: Component, ...rest }, i) => {
              if (lyt === 'main')
                return (
                  <Private key={i} {...rest}>
                    <Component />
                  </Private>
                );
            })}
          </Main>
        </Route>
      </Switch>
    </Router>
  );
}
