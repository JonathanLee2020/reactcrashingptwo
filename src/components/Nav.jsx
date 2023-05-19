import { Link } from "react-router-dom"

function Nav () {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/users/lebron">Lebron</Link>
            <Link to="/users/durant">Durant</Link>
        </nav>
    )
}

export default Nav