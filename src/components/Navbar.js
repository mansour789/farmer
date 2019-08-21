import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import * as M from "materialize-css/dist/js/materialize.min.js";
class Navbar extends Component {
  componentDidMount() {
    M.Sidenav.init(document.querySelector(".sidenav"));
     
  }

  render() {
    
    return (
      <>
      <div className="navbar-fixed">
        <nav className="transparent z-depth-0">
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a href="" className="brand-logo">
                  {" "}
            <img className="material-icons" style={{ height: "120px", width: "120px",borderRadius: "20%" }} 
            src="./img/logo.png"/>
                </a>



                <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                  <i className="material-icons black-text">menu </i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">

                  <li>{" "}
                    <Link to="/" className="black-text"> Home </Link>{" "}
                  </li>
                  <li> {" "} <Link to="/aboutus" className="black-text"> About </Link>{" "}
                  </li>
      
                </ul>
              </div>
            </div>
          </div>
        </nav>
  
      </div>

       <ul className="sidenav" id="mobile-demo" >
       <li> {" "}
        <Link to="/" className="black-text"> Home </Link>{" "}
       </li>
       <li> {" "}
         <Link to="/aboutus" className="black-text"> About </Link>{" "}
       </li>
       <li> <a class="sidenav-close" href="#!">close</a> </li>
     </ul>
     </>
    );
  }
}

export default Navbar;
