import React, { Component } from "react";

const PlantContext = React.createContext();
class PlantProvidor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  plantId = srcData => {
    var body = {
      // 'key': "The Key Goes Here",
      usage_info: true,
      images: [srcData]
    };

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
        setTimeout(() => {
          fetch("https://api.plant.id/check_identifications", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              // 'key': "The Key Goes Here",
              ids: [parseInt(data.id)]
            })
          })
            .then(response => response.json())
            .then(data => {
              console.log("2nd", data);
              console.log("whole suggestion ", data[0].suggestions[0]);
              console.log(" image", data[0].images[0].url);
              this.setState({
                data: data[0].suggestions[0],
                name: data[0].suggestions[0].plant.name,
                wiki: data[0].suggestions[0].plant.url,
                image: data[0].images[0].url
              });
            }).catch(err => {
              console.log(err)
            });
        }, 10000);
      }).catch(error => {
        console.log(error)
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
