import React from "react";
import "./middle.css"
import MiddleImg from "../images/bottom_ice_cream.png"


const Middle = () => {
    return (
        <main className="mainCont">
            <div className="bottomCont">
                <h3>NEW PRODUCT</h3>
                <h2>The Twist Of Healthy Yogurt</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore id  eius ullam nisi dolorum sit. Sed ea, voluptatum quas nobis vero nostrum ex molestiae ipsa eaque consectetur? Sint, animi cum.</p>
            </div>
            <div className="bottomImg">
                <img src={MiddleImg} alt="" />
            </div>
        </main>
    )
}

export default Middle