import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Menu from './component/menu/Menu';

const App = () => {

    const [cocktails, setcocktails] = useState([]);
    const [name, setname] = useState('');

    const api = async () => {
        const data = await axios.get(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        setcocktails(data.data.drinks)
    }

    useEffect(() => {
        api();
    }, [name])

    const changleHandler = (value) => {
        setname(value)
    }



    return (
        <div className='main_container'>
            <div className='header_container'>
                <h1>Cocktail</h1>
                <input type='text' placeholder='drink' value={name} onChange={(e) => changleHandler(e.target.value)} ></input>
            </div>
            <div className='container'>
                <Menu cocktails={cocktails} setcocktails={setcocktails} />
                <div className='cocktails_container'>
                    {cocktails && (
                        cocktails.map(drink => {
                            return <div className='cocktail'>
                                <img src={drink.strDrinkThumb} alt='' />
                                <h5 >{drink.strDrink}</h5>
                            </div>
                        })
                    )}

                </div>
            </div>
        </div>
    )
}

export default App