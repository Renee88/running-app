import * as React from 'react';
import {
  Alert,
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

interface componentNameProps {}

export class MapContainer extends React.Component {
  state = {
    location: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  };

  showCurrentLocation = (info) => {
    const {latitude, longitude} = info.coords;
    const location = {...this.state.location};
    location.latitude = latitude;
    location.longitude = longitude;
    this.setState({location}, () => console.log(this.state));
  };

  componentDidMount = () => {
    Geolocation.getCurrentPosition((info) => this.showCurrentLocation(info));
  };

  render() {
    const {location} = this.state;

    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          followsUserLocation
          pitchEnabled
          zoomEnabled
          loadingEnabled
          initialRegion={location}
          minZoomLevel={16}>
            
          {location ? (
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={'Start point'}
              description={'You are here'}
            />
          ) : null}
        </MapView>
      </View>
    );
  }
}

export default MapContainer;

const styles = StyleSheet.create({
  mapContainer: {
    flex: 5,
    backgroundColor: 'white',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
