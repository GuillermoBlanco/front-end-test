import React, { Component } from 'react'
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
  width: '100vw',
  height: '200px',
  left: 0
};

export class MapContainer extends Component {
  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }

    const { latitude, longitude } = this.props;

    return (
      <Map 
        google={this.props.google}
        zoom={15}
        containerStyle={mapStyles}
        initialCenter={{
          lat: latitude || 40.854885,
          lng: longitude || -88.081807
        }}>
 
        {/* <Marker onClick={this.onMarkerClick}
          name={'Current location'} /> */}
        {this.props.children}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Place name</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyB5HAlEtCc553fYs_4WGgKuMuoC6xVx5V8")
})(MapContainer)