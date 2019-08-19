import React from "react";
import getPalntID from "../getPlantID1";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rightside from "../components/Rightside";
import Leftside from "../components/Leftside";

function Search() {

   return (
    <div className="row"><br/><br/>
    
      <div className="col s5 ">
         <Leftside />
      </div>
      <div className="col s7">
        <Rightside />
      </div>

    </div>
  

  );
}
export default Search;
