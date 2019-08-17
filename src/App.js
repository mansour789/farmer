
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact'; 
import 'materialize-css/dist/css/materialize.min.css'; 



function App() {
  return (

  <Router> 

    <div>

      <Navbar/>

      <Route  path="/" component={Home} exact /> 
      <Route  path="/aboutus" component={AboutUs} /> 
      <Route  path="/contact" component={Contact} /> 

    </div>

  </Router>
  );
}

export default App;
