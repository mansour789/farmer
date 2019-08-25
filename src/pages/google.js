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
//We used google react maps packge 
const MyMapComponent = compose(
  withProps({
    //Creat a mape
    googleMapURL:
    
    `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  //define info box is open
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
  //import google map componint
  <GoogleMap
  //this defaultZoom is the far of the map 
    defaultZoom={11}
    //center map to the current location of user
    //and display the markers
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
            icon={"https://mt.google.com/vt/icon/text=A&psize=16&font=fonts/arialuni_t.ttf&color=ff330000&name=icons/spotlight/spotlight-waypoint-a.png&ax=44&ay=48&scale=1"}
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
    // this.searchPlace();
  }

  searchPlace = () => {
    axios
      .get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${this.state.currentLatLng.lat},${this.state.currentLatLng.lng}&radius=15000&type=plant%20store&keyword=plant%20store`

      )
      .then(res => {
        // console.log(res)
        // console.log(res.data.results);
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
        <div className="center"><br/>
        <h5>This map will show the nearest plant store to you, after deploy the final version.</h5>
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