import React, {Component} from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component{
    render(){
    return (

<div> 
      
    <nav>

      <div className="nav-wrapper light-green darken-2 ">

        <a href="#" className="brand-logo">Logo</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/aboutus">About</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
          </ul>

      </div>

    </nav>

        
 </div>

    ); 
    }
}



export default Navbar;
