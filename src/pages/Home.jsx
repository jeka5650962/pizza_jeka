import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock";
import Paginate from "../components/Paginate";

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
    const [currentPage, setCurrentPage] = React.useState(1)
    const [pizzasCount, setPizzasCount] = React.useState(0)

    const categoryQuery = category > 0 ? `category=${category}` : ``
    const sortByQuery = sortType.sortProperty
    const orderQuery = sortType.orderProperty
    const searchQuery = searchValue ? `search=${searchValue}` : ''
    const itemsPerPage = 8

    React.useEffect(() => {
        setIsLoading(true)
        fetch(`https://62ec9a5955d2bd170e834d23.mockapi.io/pizzas?page=${currentPage}&limit=${itemsPerPage}&${categoryQuery}&sortBy=${sortByQuery}&order=${orderQuery}&${searchQuery}`)
            .then(res => res.json())
            .then(json => {
                setPizzas(json.items)
                setPizzasCount(json.count)
                setIsLoading(false)
            })
        window.scrollTo(0, 0)
    }, [categoryQuery, sortByQuery, orderQuery, searchQuery, currentPage])

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
            <Paginate onChangePage={number => setCurrentPage(number)}
                      pizzasCount={pizzasCount}
                      itemsPerPage={itemsPerPage}/>
        </main>
    )
}

export default Home;
