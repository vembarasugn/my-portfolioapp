
import React from "react";
import{ BrowserRouter as Router , Routes , Route } from "react-router-dom";
import DrawerTab from "./DrawerTab";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Footer from "./Footer";
import Calendly from "./Calendly";

function App(){
  return (
     <Router>
        <DrawerTab/>
           <Routes>
             <Route exact path='/' element={<Home/>}/>
             <Route exact path='/About' element={<About/>}/>
             <Route exact path='/Projects' element={<Projects/>}/>
             <Route exact path='/Calendly' element={<Calendly/>}/>
           </Routes>
        <Footer/>
     </Router>
  )
}
           
export default App;
         
     
