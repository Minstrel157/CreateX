import React from "react";
import "./Navbar.css"
import logo from "../../images/navbarImages/logo.svg"
import phone from "../../images/navbarImages/iPhone.svg"
const Navbar = () =>
{

    return(
        <div className="navbar">
            <div className="leftPart">
                <img src={logo} alt="kurwa" />
                <div className="links">
                    <a href="">
                        About us
                    </a>
                    <a href="">
                        Services
                    </a>
                    <a href="">
                        Work
                    </a>
                    <a href="">
                        News
                    </a>
                    <a href="">
                        Contact
                    </a>
                </div>
            </div>
            <div className="rightPart">
                <div className="telephone">
                    <img src={phone} alt="" srcset="" />
                </div>
                <div className="talkUs">

                </div>
            </div>
        </div>
    )
}

export default Navbar