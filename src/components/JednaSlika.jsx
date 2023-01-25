import React from 'react';
//import {neka ikonica, druga ikonica} from "react-icons/folder koji pise na pocetku ikonice";

function JednaSlika() {
    const stil = {margin: 20};
    return (
        <div className="slika" style={stil}>
            <img className = "nekaslika" src = "https:/picsum.photos/200" alt="nesto"/>
            <div className = "kratakopis">
                <h3 className = "nazivslike">NazivSlike</h3>
                <p className = "kratakopisslike">OpisSlike</p>
            </div>
            <button className="dugmezaviseinfo">ViseInfo</button>
        </div>
    );
};

export default JednaSlika;