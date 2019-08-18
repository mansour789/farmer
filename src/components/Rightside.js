import React, { Component } from "react";
import { PlantContext } from "../Context";
import getData from "../getPlantData2";


class Rightside extends Component {
  static contextType = PlantContext;
  render() {
    // const {data, image, loading} = this.context;
    //  console.log(data)
    // console.log(data.plant.name,);
    //  console.log(data.plant.name)
    //   console.log(data.plant.url)
    //   console.log(image)
    // console.log(loading)

    // console.log(getData.suggestions[0].plant.name);
    // console.log(getData.suggestions[0]);
    // console.log(getData.suggestions[0].plant.name);
    // console.log(getData.suggestions[0].plant.url);
    // console.log(getData.images[0].url);

    return (
      <>
      {/* {loading ? <Loading /> : */}
       <>
        <div className="row center">
          <img src={`${getData.images[0].url}`} alt="" />
        </div>
        <div className="row">
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  It is a {getData.suggestions[0].plant.name}
                </span>
                <p>
                  The Image is {getData.suggestions[0].plant.name} with
                  confidence of{" "}
                  {`${getData.suggestions[0].confidence.toFixed(2)} %`}.
                </p>
              </div>
              <div className="card-action">
              {getData.suggestions[0].plant.url ? <a href={`${getData.suggestions[0].plant.url}`} target="_blank">
                  Click here more info on Wikipidia
                </a> : null}  
              </div>
            </div>
          </div>
    
          <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  It is a {getData.suggestions[0].plant.name}
                </span>
                <p>
                  The Image is {getData.suggestions[0].plant.name} with
                  confidence of{" "}
                  {`${getData.suggestions[0].confidence.toFixed(2)} %`}.
                </p>
              </div>
              <div className="card-action">
                <a href={`${getData.suggestions[0].plant.url}`} target="_blank">
                  Click here more info on Wikipidia
                </a>
              </div>
            </div>
          </div>
        
        <div className="col s12 m4">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  It is a {getData.suggestions[0].plant.name}
                </span>
                <p>
                  The Image is {getData.suggestions[0].plant.name} with
                  confidence of{" "}
                  {`${getData.suggestions[0].confidence.toFixed(2)} %`}.
                </p>
              </div>
              <div className="card-action">
                <a href={`${getData.suggestions[0].plant.url}`} target="_blank">
                  Click here more info on Wikipidia
                </a>
              </div>
            </div>
          </div>
        </div> 
        </>}
      </>
    );
  }
}

export default Rightside;
