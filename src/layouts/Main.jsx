import { Route } from 'react-router-dom';

export default function Main({ children, ...rest }) {
  return (
    <>
      <header>I am a header</header>
      <Route {...rest} exact>{children}</Route>
      <footer>Iam a footer</footer>
    </>
  );
}
