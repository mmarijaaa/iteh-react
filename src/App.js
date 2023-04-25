import './App.css';
import Meni from "./components/Meni"
import Slike from "./components/Slike"
import Homepage from "./components/Homepage"
import Form from "./components/Form"
import About from './components/About';
import Footer from "./components/Footer";

import {BrowserRouter, Routes, Route} from "react-router-dom"


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
      <Footer></Footer> 
    </BrowserRouter>
    </div>
  )
}

export default App;
