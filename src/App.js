
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Search from './pages/search'; 
import StartPage from './components/StartPage'; 
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact'; 
import Footer from './components/Footer'; 


import 'materialize-css/dist/css/materialize.min.css'; 



function App() {
  return (

  <Router> 

   

      <Navbar/>  
      <Route exact path="/" component={StartPage}  /> 
      <Route exact path="/search" component={Search} /> 
      <Route exact path="/aboutus" component={AboutUs} /> 
      <Route exact path="/contact" component={Contact} /> 
  
            <Footer/>


  </Router>


 
  );
}

export default App;
