import React, {Component} from 'react'; 
import { PlantContext } from '../Context';

class Leftside extends Component {
    static contextType = PlantContext;

    constructor(props) {
        super(props)
    
    }
    
    encodeImageFileAsURL = () => {
        const filesSelected = document.getElementById("inputFileToLoad").files;
                if (filesSelected.length > 0) {
                    const fileToLoad = filesSelected[0];
                    const fileReader = new FileReader();
                    fileReader.onload =  (fileLoadedEvent) => {
                        let srcData = fileLoadedEvent.target.result; // <--- data: base64
                            this.context.plantId(srcData); //<-- calling plantId function from Context.js file
                    }
                    fileReader.readAsDataURL(fileToLoad);
                }
          }
    
   render(){
   
    return(
    <div>
      <div className="row">
        <div className="col s12 m8"> 
          <h3> -------- </h3>
          <p className="form_subtitle"> Upload an image to be processed </p>
          <input id="inputFileToLoad" type="file" onChange={this.encodeImageFileAsURL} />
         <span> <a className="waves-effect waves-light btn-small">Upload</a> </span> 
        </div>
      </div> 
    </div> 
    );
    } 

}

export default Leftside ; 
