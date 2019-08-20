import React, {Component} from 'react'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Navbar extends Component{
    render(){
    return (

      <div className="navbar-fixed">
      
    <nav className="transparent z-depth-0">


      <div className="nav-wrapper">
      <div classNmae="row">
      <div class="col s12"> 
        <a href="" class="brand-logo"> <img class="material-icons" style={{"height":"62px", "border-radius":"20%"}} src="./img/logo.png"/></a>
       
        <a href="#" data-target="mobile-demo" class="sidenav-trigger black-text"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">

   
            <li> <Link to="/" className="black-text">Home</Link> </li>
            <li> <Link to="/aboutus" className="black-text">About</Link> </li>
            
          </ul>
      </div> 
      </div>
      </div> 

    </nav>

        
 </div>

    ); 
    }
}



export default Navbar;
