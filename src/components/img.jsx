import react from "react";
import "./img.css"
import IceCream from "../images/ice_cream1.png"

const Image = () => {
    return (
        <div className="img">

            <img src={IceCream} width="100%" alt="" />

        </div>
    )
}

export default Image