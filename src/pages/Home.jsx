import {Link} from "react-router-dom"
export default function Home() {
    return (
        <div id="home">
            <Link to="/profile">Profile</Link>
            <h1>Home</h1>
            <i className="fa fa-address-book"></i>
            <i className="fa fa-spinner" ></i>
        </div>
    )
}
