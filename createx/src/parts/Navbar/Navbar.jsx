import React from "react";
import "./Navbar.css"
import logo from "../../images/navbarImages/logo.svg"
import phone from "../../images/navbarImages/iPhone.svg"
import mes from "../../images/navbarImages/Chat.svg"
const Navbar = () =>
{

    return(
        <div className="navbar">
            <div className="leftPart">
                <img src={logo} alt="kurwa" />
                <div className="links">
                    <a href="#">
                        <p>About us</p>
                    </a>
                    <a href="#">
                        <p>Services</p>
                    </a>
                    <a href="#">
                        <p>Work</p>
                    </a>
                    <a href="#">
                        <p>News</p>
                    </a>
                    <a href="#">
                        <p>Contacts</p>
                    </a>
                </div>
            </div>
            <div className="rightPart">
                <div className="telephone">
                    <img src={phone} alt="" srcset="" />
                    <div className="number">
                        <a>Call us</a>
                        <span>(405) 555-0128</span>
                    </div>
                </div>
                <div className="telephone">
                    <img src={mes} alt="" />
                    <div className="number">
                        <a>Talk to us</a>
                        <span>hello@createx.com</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar