import React from 'react';

function PizzaBlock({title, image, price}) {

    /* ------------------------------------------------------------------------------------------ pizzaCount useState */

    const [pizzaCount, setPizzaCount] = React.useState(0);

    const onClickAdd = () => {
        setPizzaCount(pizzaCount + 1);
    };

    /* ----------------------------------------------------------------------------------------------- dough useState */

    const [activeIndexDough, setActiveIndexDough] = React.useState('traditional');

    const onClickDough = (index) => {
        setActiveIndexDough(index);
    };

    /* -------------------------------------------------------------------------------------------- diameter useState */

    const [activeIndexDiameter, setActiveIndexDiameter] = React.useState(30);

    const onClickDiameter = (index) => {
        setActiveIndexDiameter(index);
    };

    /* ------------------------------------------------------------------------------------------------------- return */

    return (
        <div className="content__column pizza">
            <div className="pizza__image">
                <img src={image} alt=""/>
            </div>
            <div className="pizza__name">{title}</div>
            <div className="pizza__options options">
                <ul className="options__dough">
                    <li
                        onClick={ () => {onClickDough('thin')} }
                        className={ activeIndexDough === 'thin' ? 'active' : '' }>тонкое</li>
                    <li
                        onClick={ () => {onClickDough('traditional')} }
                        className={ activeIndexDough === 'traditional' ? 'active' : '' }>традиционное</li>
                </ul>
                <ul className="options__diameter">
                    <li
                        onClick={ () => {onClickDiameter(26)} }
                        className={ activeIndexDiameter === 26 ? 'active' : '' }>26 см</li>
                    <li
                        onClick={ () => {onClickDiameter(30)} }
                        className={ activeIndexDiameter === 30 ? 'active' : '' }>30 см</li>
                    <li
                        onClick={ () => {onClickDiameter(40)} }
                        className={ activeIndexDiameter === 40 ? 'active' : '' }>40 см</li>
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