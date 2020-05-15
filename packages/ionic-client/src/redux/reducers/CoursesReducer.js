const CourseReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_COURSES':
            return action.courses
        default:
            return state
    }
}

export default CourseReducer