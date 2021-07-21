import Routes from "./routes/Index";
import  AlertPanel  from "./components/Panel/AlertPanel";

function App() {
  return (
    <div id="app">
      <AlertPanel />
      <Routes />
    </div>
  );
}

export default App;
