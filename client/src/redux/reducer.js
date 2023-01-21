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
                games: [...action.payload],
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
                return {
                    ...state,
                    gamesCopy: state.gamesCopy.slice().sort(function (a, b) {
                        if (a.name < b.name) {
                            return 1;
                        }
                        if (a.name > b.name) {
                            return -1;
                        }
                        return 0;
                    })
                }
            }
            else if (action.payload === 'A to Z' || action.payload === 'az') {
                return {
                    ...state,
                    gamesCopy: state.gamesCopy.slice().sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })
                }
            }
            else if (action.payload === 'highRating') {
                return {
                    ...state,
                    gamesCopy: state.gamesCopy.slice().sort(function (a, b) {
                        return b.rating - a.rating
                    })
                }
            }
            else if (action.payload === 'lowRating') {
                return {
                    ...state,
                    gamesCopy: state.gamesCopy.slice().sort(function (a, b) {
                        return a.rating - b.rating
                    })
                }
            }
        case FILTER_BY_GENRE:
            if (action.payload !== 'all') {
                return {
                    ...state,
                    gamesCopy: state.games.slice().filter(
                        game => game.genre === action.payload.toLowerCase()
                    )
                }
            } else {
                return {
                    ...state,
                    gamesCopy: [...state.games]
                }
            }
        case FILTER_BY_PLATFORM:
            if (action.payload !== 'all') {
                return {
                    ...state,
                    gamesCopy: state.games.slice().filter(
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
                    gamesCopy: state.games.slice().filter(
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
            return {
                ...state
            }
    }
}