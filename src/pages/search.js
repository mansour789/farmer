import React from "react";
import getPalntID from "../getPlantID1";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Rightside from "../components/Rightside";
import Leftside from "../components/Leftside";

function Search() {
  return (
     <div>
    <div className="row">
      <h1> Home</h1>
      <div className="col s4">
        <Leftside />
      </div>
      <div className="col s8">
        <Rightside />
      </div>
      
    </div>
    </div> 
  );
}
export default Search;
