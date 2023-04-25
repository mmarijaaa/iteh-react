import React from 'react' 
import {Link} from "react-router-dom" 
import img from './images/potpismeni.png'
import imginsta from './images/insta.png'

const stilteksta = {
    textDecoration: "none",
    color: "#283347 ",
    fontSize: 17 + "px",
    marginLeft: 20 + "px",
    marginRight: 20 + "px",
    
}

function Footer() {
    return (

        <footer>
            <div className="flogo">
                <img className="fpotpis" src={img} />
            </div>
            <div className="flinkovi">
                <Link to = "/" style={stilteksta} >HOME</Link>
                <Link to = "/about" style={stilteksta}>ABOUT</Link>
                <Link to = "/paintings" style={stilteksta}>PAINTINGS</Link>
                <Link to = "/form" style={stilteksta}>SUBSCRIBE</Link>
            </div>
            <div className="finstagram">
                <img className="finsta" src={imginsta} />
            </div>
        </footer>

    )
}

export default Footer