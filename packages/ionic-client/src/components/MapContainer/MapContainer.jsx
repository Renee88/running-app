import { Map, Marker, InfoWindow, Polyline } from 'google-maps-react';
import { connect } from 'react-redux';
import getCourse from '../../redux/thunks/GetCourseThunk'
import React, { Component } from 'react'
import { IonFabButton, IonIcon } from '@ionic/react';
import { bodyOutline } from 'ionicons/icons';
import StatusBar from '../StatusBar/StatusBar';
import './MapContainer.css'

class MapContainer extends Component {


    constructor() {
        super()
        this.state = {
            showingInfoWindow: true,
            selectedPlace: null,
            activeMarker: null,
            currentLocation: null,
            startPoint: null,
            endPoint: null,
            polyline: null
        };
    }

    setNewStartPoint = (e, marker) => {
        const lat = marker.internalPosition.lat()
        const lng = marker.internalPosition.lng()
        const startPoint = { lat, lng }
        this.setState({ startPoint }, () => {
            this.showPolyline()
        })
    }


    showMarker = (map, maps, e) => {
        const lat = e.latLng.lat();
        const lng = e.latLng.lng()
        const endPoint = { lng, lat }
        this.setState({ endPoint }, ()=>{
            this.showPolyline()
        })
    }

    showPolyline = () => {
        const start = this.state.startPoint
        const end = this.state.endPoint
        this.props.getCourse(start, end)
    }

    showPosition = (position) => {
        const lat = position.coords.latitude
        const lng = position.coords.longitude
        const currentLocation = { lat, lng }
        this.setState({ currentLocation, startPoint: currentLocation })
    }

    setCenter = () => {
        navigator.geolocation.getCurrentPosition(this.showPosition)
    }


    onMarkerClick = (props, marker, e) => {
        console.log(props.google.maps.places)
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            endPoint: props.position,
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
                center={this.state.currentLocation}
            >
                <Marker
                    position={this.state.startPoint ? this.state.startPoint : this.state.currentLocation}
                    name={'current location'}
                    draggable={true}
                    onDragend={this.setNewStartPoint}
                    icon={{
                        url: "/assets/icon/startPin.png",
                        anchor: new window.google.maps.Point(32, 32),
                        scaledSize: new window.google.maps.Size(30, 30)
                    }} />


                {this.state.endPoint ? <Marker name={this.state.place} onClick={this.onMarkerClick} onDragend={this.showMarker} draggable={true} position={this.state.endPoint} /> : null}

                <Polyline path={this.props.course ? this.props.course : [] }
                    strokeColor="#3471eb"
                    strokeOpacity={0.7}
                    strokeWeight={6} />

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
const mapStateToProps = (state) => ({
    course: state.course
})

const mapDispatchToProps = {
    getCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);

