import { BrowserRouter as Router,Route,  Switch } from 'react-router-dom';
import layouts from './routes';
import NotFound from '../pages/NotFound';
export default function Index() {
  return (
    <Router>
      <Switch>
        {layouts.map((layout,i) => {
          const Layout = layout.layout;
          return (
            <Route key={i} path={layout.pages.map((page) => page.path)}>
              <Layout>
                <Switch>
                  {layout.pages.map((route, i) => {
                    const Mode=route.mode
                    return <Mode key={i} exact={true} path={route.path} component={route.component} />;
                  })}
                  <Route path="*" component={NotFound} />
                </Switch>
              </Layout>
            </Route>
          );
        })}
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
