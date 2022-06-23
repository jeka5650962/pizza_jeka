import './App.scss';
import Header from './components/Header';
import Categories from './components/Categories';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import pizzas from './assets/pizzas.json';

function App() {
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
                        {pizzas.map(obj =>
                            <PizzaBlock {...obj} />)}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;