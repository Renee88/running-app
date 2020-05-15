import decodePolyline from 'decode-google-map-polyline'
import getCourse from '../actions/GetCourse'
import axios from 'axios'

const GetCourseThunk = (currentLocation, destination) => (dispatch) => {
    axios.get(`http://localhost:4000/directions/?origin=${currentLocation}&destination=${destination}`)
            .then((res) => {
                let polyline = res.data.routes[0].overview_polyline.points
                polyline = decodePolyline(polyline)
                dispatch(getCourse(polyline))
            })
}

export default GetCourseThunk