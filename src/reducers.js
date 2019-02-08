import { CHANGE_SEARCH_FIELD, REQUEST_PEOPLE_FAILED, REQUEST_PEOPLE_SUCCESS, REQUEST_PEOPLE_PENDING } from './constants';

const initialStateSearch = {
    searchField: ''
}

// state: state of the application
// action is just a empty object
export const searchPeople = (state=initialStateSearch, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStatePeople = {
    people : [],
    error : '',
    isPending : false
}

export const requestPeople = (state=initialStatePeople, action={}) => {
    switch(action.type) {
        case REQUEST_PEOPLE_PENDING:
            return Object.assign({}, state, {isPending : true})
        case REQUEST_PEOPLE_SUCCESS:
            return Object.assign({}, state, {people : action.payload, isPending : false})
        case REQUEST_PEOPLE_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false})
        default:
            return state;
    }
}