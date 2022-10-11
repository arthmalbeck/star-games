import {
    LIST_GAMES_PENDING,
    LIST_GAMES_SUCCESS,
    LIST_GAMES_FAILURE,
    FIND_GAME_PENDING,
    FIND_GAME_SUCCESS,
    FIND_GAME_FAILURE
} from './actionTypes';

const INITIAL_STATE = { 
    list: null,
    loading: false 
}

function gamesReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case LIST_GAMES_SUCCESS:
            return {
                ...state,
                loading: false,
                list: action.list,
            }
        case LIST_GAMES_FAILURE:
            return {
                ...state,
                list: null,
                loading: false
            }
        case FIND_GAME_SUCCESS:
            return {
                ...state,
                loading: false,
                game: action.game,
            }
        case FIND_GAME_FAILURE:
            return {
                ...state,
                game: null,
                loading: false
            }
        case LIST_GAMES_PENDING:
        case FIND_GAME_PENDING:
            return {
                ...state,
                loading: true,
            }
        default:
            return state
    }
}

export { gamesReducer };