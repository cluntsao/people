import { 
    CHANGE_SEARCH_FIELD, 
    REQUEST_PEOPLE_FAILED, 
    REQUEST_PEOPLE_SUCCESS, 
    REQUEST_PEOPLE_PENDING 
} from './constants';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    // Whatever data user needs
    payload: text
})

export const requestPeople = () => (dispatch) => {
    dispatch({ type: REQUEST_PEOPLE_PENDING});
    fetch("https://randomuser.me/api/?results=100")
    .then(res => res.json())
    .then(data => {
        const users = data["results"];
        users.forEach((user, idx) => {user.id = idx});
        dispatch({ type: REQUEST_PEOPLE_SUCCESS, payload: users})
    })
    .catch(error => dispatch({type: REQUEST_PEOPLE_FAILED, payload: error }))
}