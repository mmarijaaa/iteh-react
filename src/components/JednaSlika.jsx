import React from 'react';


function JednaSlika({slika}) {
    
    const stil = {
        marginTop: 30 + "px", 
        marginLeft: 10 + "px",
        marginRight: 10 + "px",
        marginBottom: 30 + "px"
    };
    const stilslike = {
        height: 210 + "px",
        
    }
    return (
        <div className="slika" style={stil}>
            <div className="kratakopis"> 
                 <h3 className = "nazivslike">{slika.title}</h3>
            </div>
            <div className="slikice">
                <img className = "nekaslika" src = {slika.nekaslika} style = {stilslike}/>
            </div>
            <div className = "kratakopis">
                
                <h3 className = "kratakopisslike">{slika.description}</h3>
                <h4 className = "muzej">{slika.muzej}</h4>
            </div>
        </div>
    );
};

export default JednaSlika; 