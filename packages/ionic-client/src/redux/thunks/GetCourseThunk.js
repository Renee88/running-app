import decodePolyline from 'decode-google-map-polyline'
import getCourse from '../actions/GetCourse'
import axios from 'axios'

const GetCourseThunk = (currentLocation, destination) => (dispatch) => {
    const latCurr = currentLocation.lat
    const lngCurr = currentLocation.lng
    currentLocation = `${latCurr},${lngCurr}`

    const latDes = destination.lat
    const lngDes = destination.lng
    destination = `${latDes},${lngDes}`

    axios.get(`http://localhost:3000/courses/?origin=${currentLocation}&destination=${destination}`)
            .then((res) => {
                console.log(res)
                let polyline = res.data.routes[0].overview_polyline.points
                polyline = decodePolyline(polyline)
                dispatch(getCourse(polyline))
            })
}

export default GetCourseThunk