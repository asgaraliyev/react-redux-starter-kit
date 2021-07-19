import { Route,useHistory } from 'react-router-dom';
export default function Public({ children, ...rest }) {
  const history=useHistory()
  function isAuth() {
    return true;
  }
  if (isAuth()) {
    return (
      <Route {...rest} exact>
        {children}
      </Route>
    );
  } else {
    history.push("/not-found")
    return <h1>Not Found</h1>;
  }
}
