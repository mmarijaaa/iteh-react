import { useState } from 'react';
import JednaSlika from './JednaSlika';
import ReactPaginate from 'react-paginate';




const stilstranice = {
    paddingTop: 10 + "px",
    paddingBottom: 30 + "px",
    backgroundColor: "#455a64"
}

function Slike() { 

    const slike = [
        {
            id: 1,
            title: "'Starry night'",
            description: "June, 1889",
            nekaslika: require("./images/Starry-Night.jpg"),
            muzej: "The Museum of Modern Art, New York"
        },
        {
            id: 2,
            
            title: "'Wheat field with Cypresses'",
            description: "July, 1889",
            nekaslika: require("./images/Wheatfield-With-Cypress-I.jpg"),
            muzej: "Metropolitan Museum of Art, New York"
        },
        {
            id: 3,
            title: "'Starry night over the Rhone'",
            description: "September, 1888",
            nekaslika: require("./images/Starry_Night_Over_the_Rhone.jpg"),
            muzej: "Musée d'Orsay, Paris"
        },
        {
            id: 4,
            title: "'Irises'",
            description: "May, 1889",
            nekaslika: require("./images/Irises.jpg"),
            muzej: "J. Paul Getty Museum, Los Angeles"
        },
        {
            id: 5,
            title: "'Potato eaters'",
            description: "April, 1885",
            nekaslika: require("./images/potatoeaters.jpg"),
            muzej: "Van Gogh Museum, Amsterdam"
        },
        {
            id: 6,
            title: "'Almond blossoms'",
            description: "March, 1890",
            nekaslika: require("./images/almondblossom.jpg"),
            muzej: "Van Gogh Museum, Amsterdam"
        },
        {
            id: 7,
            title: "'Self Portrait with Bandaged Ear'",
            description: "January, 1889",
            nekaslika: require("./images/portraitear2.jpg"),
            muzej: "The Courtauld Gallery, London"
        },
        {
            id: 8,
            title: "'Wheat field with crows'",
            description: "July, 1890",
            nekaslika: require("./images/wheatfieldwithcrows.jpg"),
            muzej: "Van Gogh Museum, Amsterdam"
        },
        {
            id: 9,
            title: "'Sunflowers'",
            description: "May, 1888",
            nekaslika: require("./images/sunflowers.jpg"),
            muzej: "National Gallery, London"
        },
        {
            id: 10,
            title: "'Self-Portrait'",
            description: "September, 1889",
            nekaslika: require("./images/selfportrait.jpg"),
            muzej: "Musée d'Orsay, Paris"
        },
        {
            id: 11,
            title: "'Café Terrace at Night'",
            description: "September, 1888",
            nekaslika: require("./images/Cafe-Terrace-On-The-Place-Du-Forum.jpg"),
            muzej: "Kröller-Müller Museum, Otterlo"
        },
        {
            id: 12,
            title: "'Portrait of Dr. Gachet'",
            description: "May, 1890",
            nekaslika: require("./images/Portrait_of_Dr._Gachet.jpg"),
            muzej: "Musée d'Orsay, Paris"
        },
        {
            id: 13,
            title: "'The bedroom'",
            description: "October, 1888",
            nekaslika: require("./images/thebedroom.jpg"),
            muzej: "Van Gogh Museum, Amsterdam"

        },
        {
            id: 14,
            title: "'La méridienne'",
            description: "December, 1889",
            nekaslika: require("./images/La-Mridienne-1889.jpg"),
            muzej: "Musée d'Orsay, Paris"
        },
        {
            id: 15,
            title: "'The Night Café'",
            description: "September, 1888",
            nekaslika: require("./images/The-Night-Cafe-In-The-Place-Lamartine-In-Arles.jpg"),
            muzej: "Yale University Art Gallery, New Haven"
        },
        {
            id: 16,
            title: "'The Red Vineyard'",
            description: "November, 1888",
            nekaslika: require("./images/The-Red-Vineyard.jpg"), 
            muzej: "The Pushkin State Museum of Fine Arts, Moscow"
        },
        {
            id: 17,
            title: "'Avenue with Flowering Chestnut Trees'",
            description: "March, 1889",
            nekaslika: require("./images/avenue-with-flowering-chestnut-trees.jpg"),
            muzej: "Musée d'Orsay, Paris"
        },
        {
            id: 18,
            title: "'First Steps, after Millet'",
            description: "December, 1889",
            nekaslika: require("./images/First-Steps-After-Millet.jpg"),
            muzej: "Musée d'Orsay, Paris"
        },
        {
            id: 19,
            title: "'Olive Trees With Yellow Sky And Sun'",
            description: "November, 1889",
            nekaslika: require("./images/Olive-Trees-With-Yellow-Sky-And-Sun.jpg"),
            muzej: "Metropolitan Museum of Art, New York"
        },
        {
            id: 20,
            title: "'Bridges across the Seine at Asnieres'",
            description: "April, 1887",
            nekaslika: require("./images/Vincent_van_Gogh_-_Bridges_across_the_Seine_at_Asnieres.jpg"),
            muzej: "E. G. Bührle Foundation, Zürich"
        },
    ]
   
    const listaslika = slike.map((pic) => (
        <JednaSlika slika = {pic}  key = {pic.id}/>
    ))
    const [sveslike, setSveSlike] = useState(listaslika.slice(0,6));
    const [pageNumber, setPageNumber] = useState(0);

    const picsPerPage = 4;
    //broj stranica koliko imamo * slika po stranici = koliko smo slika videli 
    //3 stranice * 2 slike = 6 slika ukupno
    const pagesVisited = pageNumber * picsPerPage;
    //koje slike ce biti po stranici

    const prikaziSlike = slike.slice(pagesVisited, pagesVisited + picsPerPage)
    .map((pic) => (
        <JednaSlika slika = {pic}  key = {pic.id}/>
    ))

    const pageCount = Math.ceil(slike.length / picsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }

    return (
        <div className="galerijaslika" style={stilstranice}>

            
            <div className="sveslike">
                {prikaziSlike}
            </div>
            <div className="pages">
            <ReactPaginate 
                previousLabel = {"<"}
                nextLabel = {">"}
                pageCount = {pageCount}
                onPageChange = {changePage}
                containerClassName = {"paginationBttns"}
                previousLinkClassName = {"previousBttn"}
                nextLinkClassName = {"nextBttn"}
                disabledClassName = {"paginationDisabled"}
                activeClassName = {"paginationActive"}
            
            />
            </div>


            
        </div>
    );
};

export default Slike;