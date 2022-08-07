import React from "react";
import './App.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';

function App() {

    const [pizzas, setPizzas] = React.useState([])

    React.useEffect(() => {
        fetch('https://62ec9a5955d2bd170e834d23.mockapi.io/pizzas')
            .then(res => res.json())
            .then((json) => setPizzas(json))
    }, [])

    return (
        <div className="wrapper">
            <div className="container">
                <Header/>
                <main className="content">
                    <div className="filter">
                        <Categories/>
                        <Sort/>
                    </div>
                    <h1>Все пиццы</h1>
                    <div className="content__body">
                        {pizzas.map((obj, id) =>
                            <PizzaBlock {...obj} key={id}/>)}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;