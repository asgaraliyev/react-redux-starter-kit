import { Link } from "react-router-dom";
export default function Home() {
  /**
   * this function will open alert with using global function
   */
  function openAlert() {
    const data = {
      type: "danger",
      seconds:5,
      // icon: "fa fa-times-circle",
      title: "This is a warning message",
      details: "Warning",
    };

    window.alertPanel(data);
  }
  /**
   * this function will close alert with using global function
   */
  function closeAlert() {
    window.alertPanel({ status: false });
  }

  return (
    <div id="home">
      <Link to="/profile">Profile</Link>
      <h1>Home</h1>
      <button className="btn" onClick={openAlert}>Open Alert</button>
      <button className="btn" onClick={closeAlert}>Close Alert</button>
    </div>
  );
}
