import styles from "./Pagination.module.scss"
import React from "react";

const Pagination = () => {

    const paginationList = ['<<', '<', '1', '2', '3', '4', '5', '>', '>>']
    const [activePage, setActivePage] = React.useState(2)

    return (
        <div className={styles.pagination}>
            <ul className={styles.list}>
                {
                    paginationList.map((item, index) => (
                        <li
                            key={index}
                            className={activePage === index ? styles.active : ''}
                            onClick={() => setActivePage(index)}
                        ><span>{item}</span></li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination
