import styles from "./Paginate.module.scss"
import ReactPaginate from "react-paginate"

const Paginate = ({onChangePage}) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={8}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginate
