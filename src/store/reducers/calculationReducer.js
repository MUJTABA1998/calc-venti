import {Add_Project} from '../types'

const initialState = {
    projects: [],
    project: {},
    total: 0
}

const calcReducer = (state = initialState, action) => {

    switch (action.type) {
        case Add_Project:
            return {
                ...state,
                projects: [...state.projects, action.payload ],
                project: action.payload
            }
        default:
            return state
    }

}

export default calcReducer;