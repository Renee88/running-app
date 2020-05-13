import { Map, Marker, InfoWindow, GoogleApiWrapper, Polyline } from 'google-maps-react';
import React, { Component } from 'react'
import { IonFabButton, IonIcon } from '@ionic/react';
import { bodyOutline } from 'ionicons/icons';
import StatusBar from '../StatusBar/StatusBar';
import './MapContainer.css'

class MapContainer extends Component {
    constructor() {
        super()
        this.state = {
            showingInfoWindow: false,
            activeMarker: null,
            selectedPlace: null,
            currentLocation: null,
            startPoint: null
        };
    }



    showMarker = (map, maps, e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng()
        const activeMarker = { lng, lat }
        this.setState({ activeMarker })
    }

    showPosition = (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        const currentLocation = { lat, lng }
        this.setState({ currentLocation })
    }

    setCenter = () => {
        navigator.geolocation.getCurrentPosition(this.showPosition)
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

    componentDidMount = () => {
        this.setCenter()
    }

    render() {
        return (

            <Map
                disableDefaultUI={true}
                google={this.props.google}
                onClick={this.showMarker}
                center={this.state.startPoint ? this.state.startPoint : this.state.currentLocation}
            >
                <Marker 
                position={this.state.startPoint ? this.state.startPoint : this.state.currentLocation} 
                name={'current location'} 
                draggable={true}

                icon={{
                    url: "/assets/icon/startPin.png",
                    anchor: new window.google.maps.Point(32,32),
                    scaledSize: new window.google.maps.Size(30, 30)
                }} />

                {this.state.activeMarker ? <Marker onClick={this.onMarkerClick} position={this.state.activeMarker} /> : null}

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace ? this.state.selectedPlace.name : null}</h4>
                    </div>
                </InfoWindow>
                <StatusBar />
                <IonFabButton id="recenter-button"  >
                    <IonIcon icon={bodyOutline} onClick={this.setCenter} />
                </IonFabButton>
            </Map>

        )
    }
}


export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_MAP}`,
    language: 'he'
})(MapContainer)