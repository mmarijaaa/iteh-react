import './App.css';
import Meni from "./components/Meni"
import Slike from "./components/Slike"
import Homepage from "./components/Homepage"
import Form from "./components/Form"
import About from './components/About';
//mogu da se koriste alijasi BrowserRouter as BRouter npr
//Routes je ustvari SWITCH
//Route je ustvari CASE kod switch-a
//za svaku rutu ima pojedinacan slucaj
import {BrowserRouter, Routes, Route} from "react-router-dom"


//<Slike slike={slike} /> ako zelimo da prosledjujemo tj delimo podatke
//kopira se i const slike ceo kod iz Slike.jsx

//Meni ide na obe rute, Slike na jednu, Homepage na drugu rutu
//path -> predstavlja link za otvaranje te stranice 
//prva mi je Homepage /, dok je stranica sa slikama na /paintings 

//"/paintings*" zvezdica oznacava da kada se ode na neku stanicu koja pocinje sa /paintings npr /paintings/slika1, 
//ta stranica ima isti sadrzaj kao i stranica /paintings 

//"/paintigs/:id" na App.js paintngs/id=nesto ?????

//moguce je ugnjezdavanje Route, u okviru jednog Route moze biti vise Route-ova

const stilstranice = {
  height: 657 + "px",
  //backgroundColor: "black"
}

function App() {

  
  return (
    <div className="webapp" >
    <BrowserRouter className="App">
      <Meni></Meni>
      <Routes>
        <Route 
        path = "/paintings" 
        element = {<Slike/>} 
        />
        <Route 
        path = "/" 
        element = {<Homepage/>} 
        />
        <Route 
        path = "/about" 
        element = {<About/>} 
        />
        <Route 
        path = "/form" 
        element = {<Form/>} 
        />
      </Routes>
      
      
    </BrowserRouter>
    </div>
  )
}

export default App;
