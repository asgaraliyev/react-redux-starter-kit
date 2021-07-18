import {Route} from "react-router-dom"
export default function Auth({ children,...rest }) {

  return (
    <>
      <h1>Auth layout</h1>
      <Route {...rest} exact>{children}</Route>
    </>
  );
}
