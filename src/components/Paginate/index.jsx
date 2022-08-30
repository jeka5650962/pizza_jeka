import styles from "./Paginate.module.scss"
import ReactPaginate from "react-paginate"

const Paginate = ({onChangePage, pizzasCount, itemsPerPage}) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={8}
            pageCount={Math.ceil(pizzasCount / itemsPerPage)}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginate
