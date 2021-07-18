import { Route } from 'react-router-dom';
export default function Public({ children, path }) {
  function isAuth() {
    return true;
  }
  if (isAuth()) {
    return (
      <Route path={path} exact>
        {children}
      </Route>
    );
  } else {
    return <h1>Not Found</h1>;
  }
}
