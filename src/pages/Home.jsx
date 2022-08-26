import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = ({searchValue}) => {

    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [category, setCategory] = React.useState(0)
    const [sortType, setSortType] = React.useState({
        id: 0,
        name: "популярные",
        sortProperty: "rating",
        orderProperty: "desc"
    })

    const categoryQuery = category > 0 ? `category=${category}` : ``
    const sortByQuery = sortType.sortProperty
    const orderQuery = sortType.orderProperty
    const searchQuery = searchValue ? `search=${searchValue}` : ''

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://62ec9a5955d2bd170e834d23.mockapi.io/pizzas?${categoryQuery}&sortBy=${sortByQuery}&order=${orderQuery}&${searchQuery}`)
            .then(res => res.json())
            .then(json => {
                setPizzas(json)
                setIsLoading(false)
            })
    }, [categoryQuery, sortByQuery, orderQuery, searchQuery])

    const skeletons = [...new Array(4)].map((_, index) => <Skeleton key={index}/>)
    const pizzaBlocks = pizzas.map((obj, id) => <PizzaBlock {...obj} key={id}/>)

    return (
        <main className="content">
            <div className="filter">
                <Categories value={category} onClickCategory={(id) => setCategory(id)}/>
                <Sort value={sortType} onClickSort={(id) => setSortType(id)}/>
            </div>
            <h1>Все пиццы</h1>
            <div className="content__body">
                {
                    isLoading ? skeletons : pizzaBlocks
                }
            </div>
        </main>
    )
}

export default Home;
