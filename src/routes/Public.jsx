import { Route } from 'react-router-dom';
export default function Public({ children, path }) {

  return (
    <Route path={path} exact>
      {children}
    </Route>
  );
}
