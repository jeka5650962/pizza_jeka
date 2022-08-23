import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {

    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [category, setCategory] = React.useState(0);
    const [sortType, setSortType] = React.useState(0)

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://62ec9a5955d2bd170e834d23.mockapi.io/pizzas?${
            category > 0 ? `category=${category}` : ``
        }`)
            .then(res => res.json())
            .then(json => {
                setPizzas(json)
                setIsLoading(false)
            })
    }, [category])

    return (
        <main className="content">
            <div className="filter">
                <Categories value={category} onClickCategory={(id) => setCategory(id)}/>
                <Sort value={sortType} onClickSort={(id) => setSortType(id)}/>
            </div>
            <h1>Все пиццы</h1>
            <div className="content__body">
                {
                    isLoading ? [...new Array(4)].map((_, index) => <Skeleton
                        key={index}/>) : pizzas.map((obj, id) => <PizzaBlock {...obj} key={id}/>)
                }
            </div>
        </main>
    )
}

export default Home;
