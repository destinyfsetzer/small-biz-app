import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";

const AnyReactComponent = ({ text }) => (
  <div>
    <LocationOnIcon />
  </div>
);

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "50vw" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCQwEqWmC9UH_CpoiMFQf6bh96SkTMAZ0Y" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
