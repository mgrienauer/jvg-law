import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 33.7707,
      lng: -118.3720
    },
    zoom: 13
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAcErPVZShTTw_jFt2CO8_0wh_5j_IUsEk' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker
            lat={33.770714}
            lng={-118.372024}
            text={<i class="fas fa-map-marker-alt fa-4x text-danger"></i>}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;