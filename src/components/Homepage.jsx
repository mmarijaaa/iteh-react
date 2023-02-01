import React from 'react';
import {Link} from "react-router-dom"


const stilstranice = {
    height: 563 + "px",
    
}


function Homepage() {
    return (

        <div className="homepage" style={stilstranice}>
            <div className="tekst"> 
                <div className="citathomepage" >“Art is to console those who are broken by life.”</div>
                <div className="opisstranice" >Discover the life and work of world famous post-impressionist painter</div>
                <div>
                <Link to = "/about" ><button className="about">ABOUT VAN GOGH</button></Link>
                </div>
                <div className="opisstranice" >If you want to learn more about Van Goghs work, subscribe here!</div>
                <div>
                <Link to = "/form" ><button className="about">SUBSCRIBE</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage;