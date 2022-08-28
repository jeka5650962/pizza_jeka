import styles from "./Pagination.module.scss"
import React from "react";

const Pagination = () => {

    const list = [1, 2, 3, 4, 5]
    const [activeItem, setActiveItem] = React.useState(0)

    return (
        <div className={styles.pagination}>
            <ul className={styles.list}>
                {
                    list.map((item, index) => <li
                        key={index}
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => setActiveItem(index)}><span>{item}</span></li>)
                }
            </ul>
        </div>
    )
}

export default Pagination
