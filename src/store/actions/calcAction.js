import { Add_Project } from '../types'

export const addProject = (project) => dispatch => {
    dispatch({
        type: Add_Project,
        payload: project
    })
}