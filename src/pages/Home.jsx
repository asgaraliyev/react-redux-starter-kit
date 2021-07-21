import {Link} from "react-router-dom"
import Panel from "../components/Panel/Index"
export default function Home() {
    function openAlert(){
        // panel("active",{})
    }
    return (
        <div id="home">
            <Link to="/profile">Profile</Link>
            <h1>Home</h1>
            <button onClick={}>Alert</button>
            <i className="fa fa-address-book"></i>
            <i className="fa fa-spinner" ></i>
        </div>
    )
}
