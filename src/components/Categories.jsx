import React from "react";

function Categories() {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    const [activeIndex, setActiveIndex] = React.useState(0);

    return (
        <div className="filter__types types">
            <ul className="types__list">
                {
                    categories.map((value, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => {setActiveIndex(index)}}
                                className={activeIndex === index ? 'active' : ''}>{value}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Categories;
