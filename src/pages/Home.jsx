import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";

const Home = () => {

    const [pizzas, setPizzas] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        fetch('https://62ec9a5955d2bd170e834d23.mockapi.io/pizzas')
            .then(res => res.json())
            .then(json => {
                setPizzas(json)
                setIsLoading(false)
            })
    }, [])

    return (
        <main className="content">
            <div className="filter">
                <Categories/>
                <Sort/>
            </div>
            <h1>Все пиццы</h1>
            <div className="content__body">
                {
                    isLoading ? [...new Array(8)].map((_, index) => <Skeleton
                        key={index}/>) : pizzas.map((obj, id) => <PizzaBlock {...obj} key={id}/>)
                }
            </div>
        </main>
    )
}

export default Home;
