import React from 'react'; 
import { NavLink } from "react-router-dom";


function Nav() {
    return(
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/home" className="nav-brand">My Projects</NavLink>
                    <ul className="nav-links">
                        <li><NavLink to="/aboutme">About Me</NavLink></li>
                        <li><NavLink to="/home">Counter Card</NavLink></li>
                        <li><NavLink to="/calculator">Calculator</NavLink></li>
                        <li><NavLink to="/">Log in</NavLink></li>
                    </ul>
            </div>
        </nav>
    )
}

export default Nav;