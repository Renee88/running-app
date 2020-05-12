import { Map, Marker, InfoWindow, GoogleApiWrapper, Polyline } from 'google-maps-react';
import React, { Component } from 'react'
import CurrentLocation from '../CurrentLocation/CurrentLocation'
import { IonItem, IonGrid, IonRow, IonCol } from '@ionic/react';
import './MapContainer.css'
import StatusBar from '../StatusBar/StatusBar';

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            markers: []
        };
    }


    showMarker = (map, maps, e) => {
        const { latLng } = e;
        const lat = e.latLng.lat();
        const lng = e.latLng.lng();
        const markers = [...this.state.markers]
        const activeMarker = { lng, lat }
        markers.push(activeMarker)
        this.setState({ markers, activeMarker })
    }

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    }

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    componentDidMount() {
        if (this.props.centerAroundCurrentLocation) {
            if (navigator && navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(pos => {
                    const coords = pos.coords;
                    this.setState({
                        currentLocation: {
                            lat: coords.latitude,
                            lng: coords.longitude
                        }
                    });
                });
            }
        }
    }



    render() {
        return (
            <CurrentLocation
                centerAroundCurrentLocation
                google={this.props.google}
                disableDefaultUI={true}
            >

                {this.state.selectedPlace ? <Marker onClick={this.onMarkerClick} position={this.state.activeMarker} /> : <Marker onClick={this.onMarkerClick} name={'current location'}></Marker>}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
                <StatusBar />
            </CurrentLocation>

        )
    }
}


export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_MAP}`,
    language: 'he'
})(MapContainer)