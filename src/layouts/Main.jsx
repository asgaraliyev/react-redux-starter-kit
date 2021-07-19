import Header from '../components/Header';
export default function Main({ children }) {
  return (
    <>
      <Header />
      {children}
      <footer>Iam a footer</footer>
    </>
  );
}
