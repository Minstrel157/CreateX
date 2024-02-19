import React from "react";
import "./Navbar.css"
import logo from "../../images/navbarImages/logo.svg"
const Navbar = () =>
{

    return(
        <div className="navbar">
            <div className="leftPart">
                <img src={logo} alt="kurwa" />
            </div>
            <div className="rightPart">
                
            </div>
        </div>
    )
}

export default Navbar