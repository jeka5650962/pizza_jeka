import styles from "./Paginate.module.scss"
import ReactPaginate from "react-paginate"

const Paginate = ({onChangePage, pizzasCount}) => {
    return (
        <ReactPaginate
            className={styles.pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={event => onChangePage(event.selected + 1)}
            pageRangeDisplayed={4}
            pageCount={Math.ceil(pizzasCount / 4)}
            previousLabel="<"
            renderOnZeroPageCount={null}
        />
    )
}

export default Paginate
