import React, {  useState } from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';



export const Navbar = () => {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };

        return (
            <nav className="nav">


                <ul className={active}>
                    {/* { <NavLink exact to="/" className="nav-logo">
            Farming
            <i className="fas fa-code"></i>
          </NavLink> } */}


                    <li className="nav__item">
                        <NavLink exact to="/" className="nav__link">
                            Home
                        </NavLink>
                    </li>
                    
                    <li className="nav__item">
                        <NavLink exact to="/About" className="nav__link">
                            About
                        </NavLink>
                    </li>

                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        )

           
}