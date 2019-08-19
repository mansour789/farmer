import React,{Component} from "react";
import Home from '../pages/search'; 
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StartPage extends Component {
render(){
    return(
        
    <div className="backgrounds"> 
       <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
           <div class="container">
             <br/> <br/> 

             <h4 className="header center"> Welcome to Fallah website <br/> Fallah will make you aware of all the plants around you by three simple steps <br/> <br/> Upload .. Process .. Result  </h4>

               <div class="row center">
                 <Link to= '/search' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> Start Now  </Link> 
               </div>

             <br/> <br/>
                  
           </div> 
        </div> 

       </div> 
      </div>
       
        
    ); 
}

}

export default StartPage; 