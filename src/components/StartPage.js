import React,{Component} from "react";
import Home from '../pages/search'; 

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StartPage extends Component {
render(){
    return(
        
       <div> 
       <div id="index-banner" className="parallax-container">
        <div className="section no-pad-bot">
           <div class="container">
             <br/> <br/> 
             <h4 className="header center teal-text text-lighten-2"> Welcome to Falah website <br/> Falah will make you aware of all the plants around you by three simple steps <br/> <br/> Upload .. Process .. Result  </h4>
               <div class="row center">
                <a class="waves-effect light-green lighten-5 btn "> <Link to= '/search'> Start Now  </Link> </a>
               </div>
             <br/> <br/>     
           </div> 
        </div> 
           <div className="parallax"><img src="" alt="background img 1"/> </div>    
       </div> 
       

       </div>
        
    ); 
}

}

export default StartPage; 