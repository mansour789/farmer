/* eslint-disable no-undef */

import React from "react";
import { compose, withProps, withStateHandlers } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import axios from "axios";
import {Link} from 'react-router-dom'
import InfoBox from "react-google-maps/lib/components/addons/InfoBox";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXJDGjHe2rDj46l9ddHMAsWafPSAu1WL4&v=3.exp&libraries=geometry,drawing,places",

    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withStateHandlers(
    () => ({
      isOpen: false
    }),
    {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen
      })
    }
  ),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={11}
    center={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }}
  >
      {props.isMarkerShown && <Marker position={{ lat: props.currentLocation.lat, lng: props.currentLocation.lng }} />}
    {props.places &&
      props.places.map(place => {
        return (
          <Marker
            position={{
              lat: place.geometry.location.lat,
              lng: place.geometry.location.lng
            }}
            onClick={props.onToggleOpen}
            key={place.id}
          >
            {props.isOpen && (
              <InfoBox
                onCloseClick={props.onToggleOpen}
                options={{ closeBoxURL: ``, enableEventPropagation: true }}
              >
                <div
                  style={{
                    backgroundColor: `white`,
                    opacity: 0.75,
                    padding: `8px`
                  }}
                >
                  <div style={{ fontSize: `12px`, fontColor: `#FFFFFF` }}>
                    {place.name}
                    
                  </div>
                </div>
              </InfoBox>
            )}
          </Marker>
        );
      })}
  </GoogleMap>
));

class Google extends React.PureComponent {
  state = {
    isMarkerShown: false,
    places: [],
    currentLatLng: {
      lat: 24.666525,
      lng: 46.677972
    }
  };

  componentDidMount() {
    this.delayedShowMarker();
    this.showCurrentLocation();
    this.searchPlace();
  }

  searchPlace = () => {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=24.718279,46.7465153&radius=15000&type=plant%20store&keyword=plant%20store&key=AIzaSyAXJDGjHe2rDj46l9ddHMAsWafPSAu1WL4"
      )
      .then(res => {
        // console.log(res)
        console.log(res.data.results);
        this.setState({
          places: res.data.results
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.setState(prevState => ({
          currentLatLng: {
            ...prevState.currentLatLng,
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          isMarkerShown: true
        }));
      });
    } else {
      console.log("error");
    }
  };

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true });
    }, 3000);
  };

  handleMarkerClick = () => {};

  render() {
    return (
        <div className="center"><br/><br/><br/>
            <div className="row">
                <div className="col s6 offset-s3">
      <div style={{ width: "50vw", height: "50vh", opacity: 0.90 }} >
        <MyMapComponent
          isMarkerShown={this.state.isMarkerShown}
          places={this.state.places}
          currentLocation={this.state.currentLatLng}
        />
        <br/><br/>
        <Link to= '/' className=" wbtn tooltipped pulse waves-effect waves-light btn modal-trigger green lighten-4 black-text"> Go Home Page  </Link>
      </div>
      </div>
      </div>
      </div>
    );
  }
}


export default Google;