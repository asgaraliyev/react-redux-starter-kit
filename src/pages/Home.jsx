import {Link} from "react-router-dom"
export default function Home() {
    return (
        <div id="home">
            <Link to="/profile">Profile</Link>
            <h1>Home</h1>
        </div>
    )
}
