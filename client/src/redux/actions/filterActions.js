import {
    SORTING, FILTER_BY_ORIGIN,
    RESET_FILTERS,
    FILTER_BY_GENRE_N_PLATFORM,
} from '../actions.types'


// === Filter actions ===

const filterBy = (genre, platform) => {
    return{
        type: FILTER_BY_GENRE_N_PLATFORM,
        payload:{
            genre,
            platform
        }
    }
}

const filterByOrigin = (payload) => {
    return {
        type: FILTER_BY_ORIGIN,
        payload
    }
}

const sortBy = (payload) => {
    return {
        type: SORTING,
        payload
    }
}

const resetFilters = () => {
    return {
        type: RESET_FILTERS
    }
}
export { filterBy, filterByOrigin, sortBy, resetFilters }