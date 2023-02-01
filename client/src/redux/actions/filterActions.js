import axios from 'axios'
import {
    SORTING, FILTER_BY_ORIGIN,
    RESET_FILTERS,
    FILTER_BY_GENRE_N_PLATFORM,
    GET_GENRES, GET_PLATFORMS, ERROR
} from '../actions.types'


// === Filter actions ===

const filterBy = (genre, platform) => {
    return {
        type: FILTER_BY_GENRE_N_PLATFORM,
        payload: {
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

const getGenres = () => {
    return async function (dispatch) {
        axios.get(`http://localhost:3001/genres`)
            .then(res => {
                return dispatch({
                    type: GET_GENRES,
                    payload: res.data
                })
            })
            .catch(err => {
                return dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}

const getPlatforms = () => {
    return async function (dispatch) {
        axios.get(`http://localhost:3001/platforms`)
            .then(res => {
                return dispatch({
                    type: GET_PLATFORMS,
                    payload: res.data
                })
            })
            .catch(err => {
                return dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}

export { filterBy, filterByOrigin, sortBy, resetFilters, getGenres, getPlatforms }