import React, { Component } from 'react'
import Rightside from "../components/Rightside";
import Leftside from "../components/Leftside";




 class Search extends Component {
   state = {beigen: true}
   startProccess = () => {
     this.setState({
       beigen: false
     })
   }
  render() {
    return (
      <div className="row"><br/><br/>
      <div className="col s5">
        <Leftside  startProccess={this.startProccess}/>

      </div>
      {this.state.beigen ? null : <div className="col s7">
        <Rightside />

      </div>}
      
      
    </div>
    )
  }

}

export default Search;
