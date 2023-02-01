import React from 'react' 
import {Link} from "react-router-dom" 
import img from './images/potpismeni.png'

//Link koristimo da nam se ne bi refreshovala stranica, odmah se prikazuje stranica bez refresh
//ako necemo to, napisemo samo <a href = "/"></a>

//onda kod "/painting/id=nesto" 

const stilteksta = {
    textDecoration: "none",
    color: "#283347 ",
    fontSize: 17 + "px",
    marginLeft: 20 + "px",
    marginRight: 20 + "px",
    
}

function Meni() {
    return (
        /*<div className = "meni">

                <div className="levastrana">
                    <img className="potpis" src={img} />                 
                </div>
                <div className="desnastrana">
                    <div className="links">
                        <Link to = "/" style={stilteksta} >HOME</Link>
                        <Link to = "/paintings" style={stilteksta}>PAINTINGS</Link>
                        <Link to = "/form" ><button className="dugme">SUBSCRIBE</button></Link>
                    </div>
                </div>
        </div>*/

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