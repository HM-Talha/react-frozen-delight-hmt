import React from "react";
import "./footer.css"
import Icon1 from "../images/icon1.png"
import Icon2 from "../images/icon2.png"
import Icon3 from "../images/icon3.png"
import Icon4 from "../images/icon4.png"
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <section className="footerImg">
                <div className="icon1"><img src={Icon1} alt="" /></div>
                <div className="icon2"> <img src={Icon2} alt="" /></div>
                <div className="icon3"><img src={Icon3} alt="" /></div>
                <div className="icon4"><img src={Icon4} alt="" /></div>
            </section>
            <div className="footerIcon">
                <FaFacebookSquare className="icon" />
                <FaTwitterSquare className="icon" />
                <FaGooglePlusSquare className="icon" />
                <FaInstagramSquare className="icon" />
            </div>
        </footer>
    )
}

export default Footer