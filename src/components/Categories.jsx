import React from "react";

function Categories() {

    /* -------------------------------------------------------------------------------------------- category useState */

    const [activeIndex, setActiveIndex] = React.useState(0);

    // const onClickCategory = (index) => {
    //     setActiveIndex(index);
    // };

    /* ------------------------------------------------------------------------------------------------------- Arrays */

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    /* ------------------------------------------------------------------------------------------------------- return */

    return (
        <div className="filter__types types">
            <ul className="types__list">
                {categories.map((value, index) => {
                    return (
                        <li
                            onClick={ () => {setActiveIndex(index)} }
                            key={index}
                            className={activeIndex === index ? 'active' : ''}>{value}</li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Categories;