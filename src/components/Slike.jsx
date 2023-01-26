import React from 'react' ;
import JednaSlika from './JednaSlika';

//const Slike = ({slike}) => ako zelimo da prosledjujemo podatke kroz sve komponente

const Slike = () => {
    //const name = "Naziv slike";
    //const desc = "Opis slike";

    //mapiranje niza koje se koristi veliki broj npr slika za prikaz 
    /*{slike.map((pic) => {
        return <JednaSlika slika = {pic}  key = {pic.id}/>;
    })}*/
     /*{slike.map((pic) => (
        <JednaSlika slika = {pic} />
    ))}*/


    const slike = [
        {
            id: 1,
            title: "Starry night",
            description: "1889. godina"
        },
        {
            id: 2,
            title: "Wheat field with cypresses",
            description: "1889. godina"
        },
        {
            id: 3,
            title: "Starry night over the Rhone",
            description: "1888. godina"
        }
    ]

    return (
        <div className="sveslike">

            {slike.map((pic) => (
                <JednaSlika slika = {pic}  key = {pic.id}/>
            ))}


            {/*<JednaSlika slika={slike[0]}/>
            <JednaSlika slika={slike[1]}/>
            <JednaSlika slika={slike[2]}/>*/}
        </div>
    );
};

export default Slike;