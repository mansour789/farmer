import React, {Component} from 'react'; 
import { PlantContext } from '../Context';

class Leftside extends Component {
    static contextType = PlantContext;

    
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
    
      <div className="row ">
          
        <div className="col s12 m8 "> 
          <br/><br/><br/><br/>
          <h4 className="form_subtitle"> Upload an image to be processed </h4>
          <ol type="I">
              <li>Upload plant's image.</li>
              <li>Wait for the magic of the data science.</li>
              <li>Plant Information will be provided. </li>
              <li>Additional links will be provided too.</li>
          </ol>
          <input id="inputFileToLoad" type="file" onChange={this.encodeImageFileAsURL} />
          <button className="wbtn tooltipped waves-effect waves-light btn modal-trigger green lighten-4 black-text" onClick={this.props.startProccess}>Upload</button>
        </div>
      </div> 
    
    );
    } 

}

export default Leftside ; 
