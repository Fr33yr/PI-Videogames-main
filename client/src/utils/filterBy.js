export function filterBy(arr, obj) {
    let {genre, platform} = obj
    if(platform !== 'All' && genre === 'All'){
        return arr.filter(game => game.platforms.includes(platform) === true)
    }
    else if(genre !== 'All' && platform === 'All'){
        return arr.filter(game => game.genres.includes(genre) === true)
    }
    else if(genre !== 'All' && platform !== 'All'){
        return arr.filter(game => game.genres.includes(genre) === true && game.platforms.includes(platform) === true)
    }else if(genre === 'All' && platform === 'All'){
        return arr
    }
}