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
      remaining: 0,
      limitOut: "",
      lessUse: 1000
    };
  }

  gitData = (key, srcData) => {
    

    var body = {
      key: key,
      usage_info: true,
      images: [srcData]
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
        // console.log(data);

        //we hade to set time between until the response of image prossecing
        setTimeout(() => {
          fetch("https://api.plant.id/check_identifications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              key: key,
              ids: [parseInt(data.id)]
            })
          })
            .then(response => response.json())
            .then(data => {
              // console.log("2nd", data);
              // console.log("whole suggestion ", data[0].suggestions[0]);
              // console.log(" image", data[0].images[0].url);
              this.setState({
                data: data[0].suggestions[0],
                image: data[0].images[0].url_tiny,
                loading: false
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

    // }else{
    //   console.log("no limit")
    //
    // }
  };

  componentDidMount() {
    const keys = [
      "uIAfQNkeEafSl721A9GvkgsbxqWj5X5uw5l4L0PAPn49nNZrHk",
      "urCgrUEmyK1Im8cHhPmrJ0yEVYHPu41ZSF3cBehb2iaBd1FdAW",
      "qdd0idgJTzibE6uv5ksClPCaYqZeBvD72Gvqe22L6L8bKl1CgD"
    ];

    keys.forEach(key => {
      fetch("https://api.plant.id/usage_info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          key: key
        })
      })
        .then(response => response.json())
        .then(data => {
          // console.log("2nd", data.used_week);

          this.setState({
            // to clalc how many requists lift the key
            remaining: this.state.remaining + data.used_week
          });

          if (data.used_week < this.state.lessUse) {
            this.setState({
              lessUse: data.used_week,
              key: key
            });
          }
        })

        .catch(err => {
          this.setState({
            loading: false
          });
          console.log(err);
        });
    });
  }

  plantId = (key, srcData) => {
    this.setState({
      loading: true
    });

    this.gitData(key, srcData)
    // console.log("calling data", key);
  };

  sorry = () => {
    this.setState({
      loading: false,
      limitOut: "Sorry We Are Out Of Requests, Please Try Again After A Week"
    });
  };

  render() {
    return (
      <PlantContext.Provider
        value={{
          ...this.state,
          plantId: this.plantId,
          sorry: this.sorry
        }}
      >
        {this.props.children}
      </PlantContext.Provider>
    );
  }
}
const PlantConsumer = PlantContext.Consumer;

export { PlantProvidor, PlantConsumer, PlantContext };
