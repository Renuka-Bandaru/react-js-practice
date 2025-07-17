import { Link, NavLink } from "react-router-dom";
import './header.css';
function Header(){
    return(
        <nav>
            <ul className="navbar">
                <NavLink ><Link to="home" ><a className="list-items" href="/home">Home</a></Link></NavLink>
                <NavLink><Link to="loginForm" ><a href="/loginForm" className="list-items"> loginForm</a></Link></NavLink>
            </ul>
        </nav>
    )
};
export default Header;