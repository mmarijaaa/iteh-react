import React from 'react' 
import {Link} from "react-router-dom" 
import img from './images/potpismeni.png'
 

const stilteksta = {
    textDecoration: "none",
    color: "#283347 ",
    fontSize: 17 + "px",
    marginLeft: 20 + "px",
    marginRight: 20 + "px",
    
}

function Meni() {
    return (
        

        <div className="ceomeni">
            <div>
                <img className="potpis" src={img} /> 
            </div>
            <div className="stranice">
                <Link to = "/" style={stilteksta} >HOME</Link>
                <Link to = "/about" style={stilteksta}>ABOUT</Link>
                <Link to = "/paintings" style={stilteksta}>PAINTINGS</Link>
                <Link to = "/form" style={stilteksta}>SUBSCRIBE</Link>
            </div>
        </div>
    )
}

export default Meni