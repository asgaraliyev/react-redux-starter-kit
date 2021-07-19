import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UnAuthenticatedRouters, AuthenticatedRouters } from "./routes";

export default function Index() {

  /**
   * 
   * @returns Route with component and that component will be wrapped in layout,
   *          these routes are available for private routes
   */
  function UnAuthenticatedSwitch() {
    return (
      <Switch>
        {UnAuthenticatedRouters.map(({path, exact, component: Component, layout: Layout }, _key) => {
          return (
            <Route
              key={_key}
              path={path}
              exact={exact}
              render={(props) => {
                return (
                  <Layout>
                    <Component  {...props} />
                  </Layout>
                )
              }}
            />
          );
        })}
      </Switch>
    );
  }

  /**
   * 
   * @returns Route with component and that component will be wrapped in layout,
   *          these routes are available for public routes
   * 
   */
  function AuthenticatedSwitch() {
    return (
      <Switch>
        {AuthenticatedRouters.map(({path, exact, component: Component, layout: Layout }, _key) => {
          return (
            <Route
              key={_key}
              path={path}
              exact={exact}
              render={(props) => {
                return (
                  <Layout>
                    <Component  {...props} />
                  </Layout>
                )
              }}
            />
          );
        })}
      </Switch>
    );
  }

  return (
    <Router>
      <UnAuthenticatedSwitch />
      <AuthenticatedSwitch />
    </Router>
  );
}