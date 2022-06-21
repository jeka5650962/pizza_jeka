import './App.scss';
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";

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
                        <PizzaBlock title={'Маргарита'} image={'/images/pizza-1.jpg'} price={450}/>
                        <PizzaBlock title={'Четыре сезона'} image={'/images/pizza-2.jpg'} price={395}/>
                        <PizzaBlock title={'Пепперони'} image={'/images/pizza-3.jpg'} price={675}/>
                        <PizzaBlock title={'Чизбургер-пицца'} image={'/images/pizza-4.jpg'} price={415}/>
                        <PizzaBlock title={'Овощи и грибы'} image={'/images/pizza-5.jpg'} price={285}/>
                        <PizzaBlock title={'Сырная'} image={'/images/pizza-6.jpg'} price={245}/>
                        <PizzaBlock title={'Пепперони Фреш с перцем'} image={'/images/pizza-7.jpg'} price={803}/>
                        <PizzaBlock title={'Цыпленок барбекю'} image={'/images/pizza-8.jpg'} price={295}/>
                        <PizzaBlock title={'Кисло-сладкий цыпленок'} image={'/images/pizza-9.jpg'} price={275}/>
                        <PizzaBlock title={'Крэйзи пепперони'} image={'/images/pizza-10.jpg'} price={580}/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;