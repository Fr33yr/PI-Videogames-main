import styles from './pagination.module.css'

function Pagination({ currentPage, setCurrentPage, nPages }) {
    // === Local state ===
    let prevPage = currentPage - 1
    let nextPage = currentPage + 1

    return (
        <>
            <div className={styles.pagination}>
                {/* === Page buttons === */}
                <button onClick={() => setCurrentPage(0)} disabled={nPages === 0 || currentPage === 0}>first</button>
                <button onClick={() => setCurrentPage(prevPage)} disabled={currentPage === 0 || nPages === 0}>{"<="}</button>
                {/* === Page numbers === */}
                <p>{prevPage >= 0 ? prevPage : ""}</p>
                <p className={styles.currentPage}>{currentPage}</p>
                <p>{nextPage > nPages || nPages === 0 ? "" : nextPage}</p>
                {/* === Page buttons === */}
                <button onClick={() => setCurrentPage(nextPage)} disabled={currentPage === nPages || nPages === 0}>{"=>"}</button>
                <button onClick={() => setCurrentPage(nPages)} disabled={nPages === 0 || currentPage === nPages}>last</button>
            </div>
        </>
    )
}

export default Pagination