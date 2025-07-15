import { Link, NavLink } from "react-router-dom";
import './header.css';
function Header(){
    return(
        <nav>
            <ul className="navbar">
                <NavLink ><Link to="home" className="list-items"><a href="/home">Home</a></Link></NavLink>
                <li><Link to="apiPractice" className="list-items"><a href="/apiPractice">apiPractice</a></Link></li>
                <li><Link to="loginForm" className="list-items"><a href="/loginForm"> loginForm</a></Link></li>
            </ul>
        </nav>
    )
};
export default Header;