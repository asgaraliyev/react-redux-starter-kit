import Routes from "./routes/Index";
import  AlertPanel  from "./components/Panel/AlertPanel";
import Modal from 'react-modal';

function App() {
  Modal.setAppElement('#root');
  return (
    <div id="app">
      <AlertPanel />
      <Routes />
    </div>
  );
}

export default App;
