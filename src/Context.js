import React, { Component } from "react";
import axios from "axios";

const PlantContext = React.createContext();
class PlantProvidor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  getInfo = () =>{
  //  const image64 = encodeImageFileAsURL();
  //  const imageId = plantId(image64);
  console.log("get info functoon")


  }

encodeImageFileAsURL = () => {
  const filesSelected = document.getElementById("inputFileToLoad").files;
          if (filesSelected.length > 0) {
              const fileToLoad = filesSelected[0];
  
              const fileReader = new FileReader();
  
              fileReader.onload =  (fileLoadedEvent) => {
                  let srcData = fileLoadedEvent.target.result; // <--- data: base64
                return srcData
              }
              fileReader.readAsDataURL(fileToLoad);
          }
    }

//     plantId = (srcData) => {
//     var request = new XMLHttpRequest();
// request.open('POST', 'https://api.plant.id/identify?New%20item=');
// request.setRequestHeader('Content-Type', 'application/json');
// request.onreadystatechange = function () {
//   if (this.readyState === 4) {
//     console.log('Status:', this.status);
//     console.log('Headers:', this.getAllResponseHeaders());
//     console.log('Body:', this.responseText);    
//   }
// };
// var body = {
//     // 'key': 'uIAfQNkeEafSl721A9GvkgsbxqWj5X5uw5l4L0PAPn49nNZrHk',  
//     'usage_info': true,          
//     'images': [                    
//       srcData
//     ],
// };
// request.send(JSON.stringify(body));

//     }
//     plantData = () => {

//       var request = new XMLHttpRequest();
//       request.open('POST', 'https://api.plant.id/check_identifications');
//       request.setRequestHeader('Content-Type', 'application/json');
//       request.onreadystatechange = function () {
//         if (this.readyState === 4) {
//           console.log('Status:', this.status);
//           console.log('Headers:', this.getAllResponseHeaders());
//           console.log('Body:', this.responseText);
//         }
//       };
//       var body =     {
//         'key': 'uIAfQNkeEafSl721A9GvkgsbxqWj5X5uw5l4L0PAPn49nNZrHk',
        
//         'ids': [ 220463],
//         // 'custom_ids': [666]
//       };
//       request.send(JSON.stringify(body));
//     }

  render() {
    
    return (
      <PlantContext.Provider
        value={{
          ...this.state,
          getProducts: this.getProducts,
        }}
      >
        {this.props.children}
      </PlantContext.Provider>
    );
  }
}
const PlantConsumer = PlantContext.Consumer;

export { PlantProvidor, PlantConsumer, PlantContext };
