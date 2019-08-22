import React, { Component } from "react";
import axios from "axios";

const PlantContext = React.createContext();
class PlantProvidor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      image: "",
      loading: false,
      remaining: 0
    };
  }

  plantId = srcData => {
    const PLANT_API = process.env.REACT_APP_PLANT_API_KEY;
    this.setState({
      loading: true
    });
    var body = {

       'key': PLANT_API,
      'usage_info': true,
      'images': [srcData]
    };
     // we used fetch to customize the header 
    fetch("https://api.plant.id/identify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({

           // to clalc how many requists lift the key
          remaining: data.usage_info.used_week 

        })
         //we hade to set time between until the response of image prossecing
        setTimeout(() => {
          fetch("https://api.plant.id/check_identifications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              'key': PLANT_API,
              'ids': [parseInt(data.id)]
            })
          })
            .then(response => response.json())
            .then(data => {
              console.log("2nd", data);
              console.log("whole suggestion ", data[0].suggestions[0]);
              console.log(" image", data[0].images[0].url);
              this.setState({
                data: data[0].suggestions[0],


                image: data[0].images[0].url_tiny,
                loading:false

              });
              //Please Active This
              // this.moreInfo(suggestions[0].plant.name);
            })
            .catch(err => {
              this.setState({
                loading: false
              });
              console.log(err);
            });
        }, 10000);
      })
      .catch(error => {
        this.setState({
          loading: false
        });
        console.log(error);
      });
  };
  //More Info from Trefle API
  moreInfo = name => {
     const TREFLE_API = process.env.REACT_APP_TREFLE_API_KEY;
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://trefle.io/api/plants?token=${TREFLE_API}&q=${name}`
      )
      .then(res => {
        console.log(res.data[0].link);
        this.getplantinfo(res.data[0].link);
      })
      .catch(err => {
        console.log(err);
      });
  };
  getplantinfo = link => {

    const TREFLE_API = process.env.REACT_APP_TREFLE_API_KEY;


    axios
      .get(
        `https://cors-anywhere.herokuapp.com/${link}?token=${TREFLE_API}`
      )
      .then(res => {
        console.log(res.data);
        //Here to change the state when you git more data
        this.setState({
          loading: false
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <PlantContext.Provider
        value={{
          ...this.state,
          plantId: this.plantId
        }}
      >
        {this.props.children}
      </PlantContext.Provider>
    );
  }
}
const PlantConsumer = PlantContext.Consumer;

export { PlantProvidor, PlantConsumer, PlantContext };
