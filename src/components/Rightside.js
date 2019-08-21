import React, { Component } from "react";
import { PlantContext } from "../Context";
import getData from "../getPlantData2";
import Loading from "./Loading";
import {Link} from 'react-router-dom'

class Rightside extends Component {
  static contextType = PlantContext;
  render() {
    const { data, image, loading, remaining } = this.context;
    //  console.log(data)
    // console.log(data.plant.name,);
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
          {remaining ?   <h5> {20 - remaining } trills left</h5> : <h5> Sorry We rnu out of requests</h5> }
          <div className="card z-depth-5">
            <div className="card-image">
              <img src={image} alt='pictuer' />

            </div>
            <span className="card-title">{data.plant.name}</span>
            <div className="card-content">
              <p>
                The Image is {data.plant.name} with confidence
                of {`${(data.confidence * 100).toFixed(2) } %`}.
              </p>
            </div>
            <div className="card-action">
              {data.plant.url ? (
                <a
                  href={`${data.plant.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Click here more info on Wikipidia
                </a>
              ) : null}
              <br/>{" "}
              <a><Link to="/google">
           Find The Nearest Plant Store
         </Link></a>
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
