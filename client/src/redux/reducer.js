import {
    GET_GAMES, GET_DETAILS, ERROR,
    CREATE_GAME, SORTING,
    FILTER_BY_GENRE, RESET_GAMES,
    FILTER_BY_PLATFORM, RESET_ERROR,
    FILTER_BY_ORIGIN
} from './actions.types'

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
            if (action.payload === 'Z to A' || action.payload === 'za') {
                let cbaSort = [...state.gamesCopy].sort(function (a, b) {
                    if (a.name < b.name) {
                        return 1;
                    }
                    if (a.name > b.name) {
                        return -1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    gamesCopy: cbaSort
                }
            }
            else if (action.payload === 'A to Z' || action.payload === 'az') {
                let abcSort = [...state.gamesCopy].sort(function (a, b) {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
                return {
                    ...state,
                    gamesCopy: abcSort
                }
            }
            else if (action.payload === 'highRating') {
                let high = [...state.gamesCopy].sort(function (a, b) {
                    return b.rating - a.rating
                })
                return {
                    ...state,
                    gamesCopy: high
                }
            }
            else if (action.payload === 'lowRating') {
                let low = [...state.gamesCopy].sort(function (a, b) {
                    return a.rating - b.rating
                })
                return {
                    ...state,
                    gamesCopy: low
                }
            }
        case FILTER_BY_GENRE:
            if (action.payload !== 'all') {
                return {
                    ...state,
                    gamesCopy: [...state.games].filter(
                        game => game.genre === action.payload.toLowerCase()
                    )
                }
            } else {
                return {
                    ...state,
                    gamesCopy: state.games
                }
            }
        case FILTER_BY_PLATFORM:
            if (action.payload !== 'all') {
                return {
                    ...state,
                    gamesCopy: [...state.games].filter(
                        game => game.platform === action.payload.toLowerCase()
                    )
                }
            } else {
                return {
                    ...state,
                    gamesCopy: [...state.games]
                }
            }
        case FILTER_BY_ORIGIN:
            if(action.payload === true){
                return{
                    ...state,
                    gamesCopy: [...state.games].filter(
                        game => game.created === true
                    )
                }
            }else{
                return{
                    ...state,
                }
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
            
        default:
            return state
    }
}