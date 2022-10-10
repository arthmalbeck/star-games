import {
    LIST_GAMES_PENDING,
    LIST_GAMES_SUCCESS,
    LIST_GAMES_FAILURE
} from './actionTypes';

const INITIAL_STATE = { 
    list: null, 
    page: "page=1",
    loading: false 
}

function gamesReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case LIST_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                page: action.page,
                list: action.list,
            }
        case LIST_GAMES_PENDING:
            return {
                ...state,
                loading: true,
            }
        case LIST_GAMES_FAILURE:
            return {
                ...state,
                list: null,
                page: null,
                loading: false
            }
        default:
            return state
    }
}

export { gamesReducer };