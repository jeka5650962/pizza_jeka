function Categories() {
    return (
        <div className="filter__types types">
            <ul className="types__list">
                <li>
                    <a href="" className="types__all active">Все</a>
                </li>
                <li>
                    <a href="" className="types__meat">Мясные</a>
                </li>
                <li>
                    <a href="" className="types__vegan">Вегетарианская</a>
                </li>
                <li>
                    <a href="" className="types__grill">Гриль</a>
                </li>
                <li>
                    <a href="" className="types__hot">Острые</a>
                </li>
                <li>
                    <a href="" className="types__closed">Закрытые</a>
                </li>
            </ul>
        </div>
    )
}

export default Categories;