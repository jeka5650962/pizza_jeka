import React from "react";
import './App.scss';
import {Routes, Route} from "react-router-dom";
import Header from './components/Header';
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

function App() {

    const [searchValue, setSearchValue] = React.useState('')

    return (
        <div className="wrapper">
            <div className="container">
                <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
                <Routes>
                    <Route path="/" element={<Home searchValue={searchValue} setSearchValue={setSearchValue}/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
