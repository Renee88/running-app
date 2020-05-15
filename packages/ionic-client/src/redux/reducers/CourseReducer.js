const CourseReducer = (state = [], action) => {
    switch (action.type){
        case 'GET_COURSE':
            return action.course
        default:
            return state
    }
}

export default CourseReducer