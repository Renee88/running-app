import MapContainer from '../MapContainer/MapContainer'
import {GoogleApiWrapper} from 'google-maps-react'
import Home from '../../pages/Home'

export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_MAP}`,
    language: 'he'
})(MapContainer)