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
                        About us
                    </a>
                    <a href="#">
                        Services
                    </a>
                    <a href="#">
                        Work
                    </a>
                    <a href="#">
                        News
                    </a>
                    <a href="#">
                        Contacts
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