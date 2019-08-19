import React from "react";
import getPalntID from "../getPlantID1";
import Rightside from "../components/Rightside";
import Leftside from "../components/Leftside";

function Home() {
  return (
    <div className="row">
      <h1> Home</h1>
      <div className="col s4">
        <Leftside />
      </div>
      <div className="col s8">
        <Rightside />
      </div>
    </div>
  );
}
export default Home;
