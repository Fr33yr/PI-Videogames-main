// === Parametros === 
// 1. firstPageCards = cantidad de cards en la primer pagina
// 2. cardsPerPage = cards por pagina
// 3. arr = array de cards que recibe la funcion

export function usePaginate(arr, cardsPerPage, firstPageCards) {
    if (arr.length <= firstPageCards || arr.length <= cardsPerPage) {
        let pages = arr
        return {pages}
    }
    else if (cardsPerPage === firstPageCards) {
        let pages = [] // array de cartas cortado en paginas
        for (let i = 0; i < arr.length; i += cardsPerPage) {
            const slicedPage = arr.slice(i, i + cardsPerPage)
            pages.push(slicedPage)
        }
        return {pages}
    }
    else {
        let fisrtPage = [] // array de cartas que corresponde a la primer pagina
        for (let i = 0; i < firstPageCards; i++) {
            fisrtPage.push(arr[i])
        }
        let pages = [] // array de cartas cortado en paginas
        for (let i = 0; i < arr.length; i += cardsPerPage) {
            const slicedPage = arr.slice(i, i + cardsPerPage)
            pages.push(slicedPage)
        }
        pages[0] = fisrtPage // reemplaza el primer elemento del array con la primer pagina

        return {pages}
    }
}