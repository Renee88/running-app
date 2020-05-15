import CoursesReducer from './CoursesReducer'
import CourseReducer from './CourseReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    courses: CoursesReducer,
    course: CourseReducer
})

export default allReducers