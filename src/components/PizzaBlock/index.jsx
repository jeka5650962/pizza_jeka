import React from 'react';

function PizzaBlock({title, imageUrl, price, sizes, types}) {

    const [pizzaCount, setPizzaCount] = React.useState(0);

    const onClickAdd = () => {
        setPizzaCount(pizzaCount + 1);
    };

    const [activeIndexType, setActiveIndexType] = React.useState(0);

    const [activeIndexDiameter, setActiveIndexDiameter] = React.useState(0);

    const typeNames = ['тонкое', 'традиционное'];

    return (
        <div className="content__column pizza">
            <div className="pizza__image">
                <img src={imageUrl} alt="pizza"/>
            </div>
            <div className="pizza__name">{title}</div>
            <div className="pizza__options options">
                <ul className="options__dough">
                    {types.map((typeId, id) => {
                        return (
                            <li
                                onClick={() => setActiveIndexType(typeId)}
                                key={id}
                                className={activeIndexType === typeId ? 'active' : ''}>{typeNames[typeId]}</li>
                        )
                    })}
                </ul>
                <ul className="options__diameter">
                    {sizes.map((size, id) => {
                        return (
                            <li
                                onClick={() => setActiveIndexDiameter(id)}
                                key={id}
                                className={activeIndexDiameter === id ? 'active' : ''}>{size} см</li>
                        )
                    })}
                </ul>
            </div>
            <div className="pizza__bottom">
                <div className="pizza__price">от {price} руб.</div>
                <button onClick={onClickAdd} className="pizza__add">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="#EB5A1E"/>
                    </svg>
                    <span>Добавить {
                        pizzaCount > 0 && <b style={{display: "inline-flex"}}>{pizzaCount}</b>
                    }</span>
                </button>
            </div>
        </div>
    )
}

export default PizzaBlock;