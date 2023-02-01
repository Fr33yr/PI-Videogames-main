import {
    GET_GAMES, GET_DETAILS, ERROR,
    CREATE_GAME, SORTING, RESET_GAMES,
    RESET_ERROR, FILTER_BY_ORIGIN,
    RESET_FILTERS, RESET_RESPONSE,
    FILTER_BY_GENRE_N_PLATFORM,
} from './actions.types'
import { orderBy } from '../utils/orderBy'
import { filterBy } from '../utils/filterBy'

const initialState = {
    games: [],
    gamesCopy: [],
    details: {},
    formData: {},
    error: {}
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_GAMES:
            return {
                ...state,
                games: action.payload,
                gamesCopy: [...action.payload]
            }
        case RESET_GAMES:
            return {
                ...state,
                games: initialState.games
            }
        case GET_DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case CREATE_GAME:
            return {
                ...state,
                formData: action.payload
            }
        case SORTING:
            return {
                ...state,
                gamesCopy: orderBy([...state.gamesCopy], action.payload)
            }
        case FILTER_BY_GENRE_N_PLATFORM:
            return {
                ...state,
                gamesCopy: filterBy([...state.games], action.payload)
            }
        case FILTER_BY_ORIGIN:
            if (action.payload === true) {
                return {
                    ...state,
                    gamesCopy: [...state.games].filter(
                        game => game.created === true
                    )
                }
            } else {
                return {
                    ...state,
                    gamesCopy: state.games
                }
            }
        case RESET_FILTERS:
            return {
                ...state,
                gamesCopy: state.games
            }
        case ERROR: {
            return {
                ...state,
                error: action.payload
            }
        }
        case RESET_ERROR:
            return {
                ...state,
                error: initialState.error
            }
        case RESET_RESPONSE:
            return{
                ...state,
                formData: {message: ''}
            }

        default:
            return state
    }
}