import React, { Component } from "react";
import { PlantContext } from "../Context";
import getData from "../getPlantData2";
import Loading from "./Loading";

class Rightside extends Component {
  static contextType = PlantContext;
  render() {
    const { data, image, loading } = this.context;
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
      {loading ? <Loading /> : <>

        <div className="center">
      <div className="row ">
        <div className="col s12 m7 ">
            
          <div class="card z-depth-5">
            <div class="card-image">
              <img src={`${getData.images[0].url}`} />

            </div>
            <span class="card-title">{getData.suggestions[0].plant.name}</span>
            <div class="card-content">
              <p>
                The Image is {getData.suggestions[0].plant.name} with confidence
                of {`${getData.suggestions[0].confidence.toFixed(2)} %`}.
              </p>
            </div>
            <div class="card-action">
              {getData.suggestions[0].plant.url ? (
                <a
                  href={`${getData.suggestions[0].plant.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here more info on Wikipidia
                </a>
              ) : null}
              <br/>
               <a
                  href={`${getData.suggestions[0].plant.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click hereGOOGLE MAP
                </a>
            </div>
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
