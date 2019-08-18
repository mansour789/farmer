import React, {Component} from 'react'; 

class Leftside extends Component {
   render(){
    return(
    <div>
      <div class="row">
        <div class="col s12 m8 l4"> 
          <h3> -------- </h3>
          <p className="form_subtitle"> Upload an image to be processed </p>
          <input id="inputFileToLoad" type="file" onchange="getInfo();" />
         <span> <a class="waves-effect waves-light btn-small">Upload</a> </span> 
        </div>
      </div> 
    </div> 
    );
    } 

}

export default Leftside ; 
