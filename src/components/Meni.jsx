import React from 'react' 
import {Link} from "react-router-dom"

//Link koristimo da nam se ne bi refreshovala stranica, odmah se prikazuje stranica bez refresh
//ako necemo to, napisemo samo <a href = "/"></a>

//onda kod "/painting/id=nesto" 

function Meni() {
    return (
        <div className = "meni">
            <div className = "vangogh">
                Van Gogh
            </div>
            <div className = "meni2">
                <Link to = "/" className="btnhome">Home</Link>
                <Link to = "/paintings" className="btnpaintings">Paintings</Link>
                <a className="btnsubscribe">Subscribe</a>
            </div>

        </div>
    )
}

export default Meni