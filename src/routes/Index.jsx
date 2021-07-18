import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
export default function Index() {
  return (
    <Router>
      <Switch>
        {routes.map(({ layout, component, isPrivate, path }) => {
          return {component};
        })}
      </Switch>
    </Router>
  );
}
