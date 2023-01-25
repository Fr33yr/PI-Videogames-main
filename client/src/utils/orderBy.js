export function orderBy(arr, type) {
    switch (type) {
        case 'Az':
            let azSort = arr.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            })
            return  azSort 
        case 'Za':
            let zaSort = arr.sort(function (a, b) {
                if (a.name < b.name) {
                    return 1;
                }
                if (a.name > b.name) {
                    return -1;
                }
                return 0;
            })
            return  zaSort 
        case 'high':
            let highSort = arr.sort(function (a, b) {
                return b.rating - a.rating
            })
            return highSort
        case 'low':
            let lowSort = arr.sort(function (a, b) {
                return a.rating - b.rating
            })
            return lowSort
        default:
            return arr
    }
}