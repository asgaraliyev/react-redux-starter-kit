import Routes from "./routes/Index";
import  AlertPanel  from "./components/Panel/AlertPanel";
import  ModalPanel  from "./components/Panel/ModalPanel";

function App() {
  return (
    <div id="app">
      <AlertPanel />
      <ModalPanel />
      <Routes />
    </div>
  );
}

export default App;
