function Categories(props) {

    const categories = ['Все', 'Мясные', 'Новые', 'Хит', 'Острые', 'Вегетарианские', 'Сырные'];

    return (
        <div className="filter__types types">
            <ul className="types__list">
                {
                    categories.map((category, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => props.onClickCategory(index)}
                                className={props.value === index ? 'active' : ''}>{category}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;
