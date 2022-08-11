import styles from "./NotFoundBlock.module.scss"
import {Link} from "react-router-dom";

const NotFoundBlock = () => {
    return (
        <div className={styles.block}>
            <h1 className={styles.title}>404</h1>
            <h3 className={styles.subtitle}>Ничего не найдено 😕</h3>
            <p className={styles.description}>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
            <Link to="/">
                <button className={styles.btn}>Вернуться на Главную</button>
            </Link>
        </div>
    )
}

export default NotFoundBlock
