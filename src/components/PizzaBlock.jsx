import React from 'react';

function PizzaBlock({title, image, price}) {

    /* ------------------------------------------------------------------------------------------ pizzaCount useState */

    const [pizzaCount, setPizzaCount] = React.useState(0);

    const onClickAdd = () => {
        setPizzaCount(pizzaCount + 1);
    };

    /* ----------------------------------------------------------------------------------------------- dough useState */

    const [activeIndexDough, setActiveIndexDough] = React.useState(1);

    const onClickDough = (index) => {
        setActiveIndexDough(index);
    };

    /* -------------------------------------------------------------------------------------------- diameter useState */

    const [activeIndexDiameter, setActiveIndexDiameter] = React.useState(1);

    const onClickDiameter = (index) => {
        setActiveIndexDiameter(index);
    };

    /* ------------------------------------------------------------------------------------------------------- Arrays */

    const typesOfDough = ['тонкое', 'традиционное'];
    const pizzaDiameters = ['26 см', '30 см', '40 см'];

    /* ------------------------------------------------------------------------------------------------------- return */

    return (
        <div className="content__column pizza">
            <div className="pizza__image">
                <img src={image} alt=""/>
            </div>
            <div className="pizza__name">{title}</div>
            <div className="pizza__options options">
                <ul className="options__dough">
                    {typesOfDough.map((value, i) => {
                        return (
                            <li
                                onClick={ () => {onClickDough(i)} }
                                className={activeIndexDough === i ? 'active' : ''}>{value}</li>
                        )
                    })}
                </ul>
                <ul className="options__diameter">
                    {pizzaDiameters.map((value, i) => {
                        return (
                            <li
                                onClick={ () => {onClickDiameter(i)} }
                                className={ activeIndexDiameter === i ? 'active' : '' }>{value}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">от {price} ₽</div>
                <button onClick={onClickAdd} className="pizza__add">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E"/>
                    </svg>
                    <span>Добавить <b>{pizzaCount}</b></span>
                </button>
            </div>
        </div>
    )
}

export default PizzaBlock;