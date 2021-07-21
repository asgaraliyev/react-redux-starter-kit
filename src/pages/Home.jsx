import { Link } from "react-router-dom";
export default function Home() {
  /**
   * this function will open alert with using global function
   */
  function openAlert() {
    const data = {
      status: true,
      type: "warning",
      icon: "fa fa-exclamation-triangle",
      title: "This is a danger message",
      details: "Great",
    };

    window.panel(data);
  }
  /**
   * this function will close alert with using global function
   */
  function closeAlert() {
    window.panel({ status: false });
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
