import { Link } from "react-router-dom";
// import Panel from "../components/Panel/Index"
export default function Home() {

  // this function will open alert panel with using global function
  function openAlert() {
    const data = {
      status: true,
      type: "danger",
      icon: "fa fa-times-circle",
      title: "Error",
      details: "Change T-shirt color",
    };
    
    window.panel(data);
  }
  return (
    <div id="home">
      <Link to="/profile">Profile</Link>
      <h1>Home</h1>
      <button onClick={openAlert}>Alert</button>
      <i className="fa fa-address-book"></i>
      <i className="fa fa-spinner"></i>
    </div>
  );
}
