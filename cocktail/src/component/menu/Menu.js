import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './Menu.css';

const Menu = ({ cocktails, setcocktails }) => {
    const [list, setList] = useState();
    const menu = async () => {
        const data = await axios.get('https://thecocktaildb.com/api/json/v1/1/list.php?c=list');
        setList(data.data.drinks);
    }
    useEffect(() => {
        menu();
    }, [])

    const filterCategory = async (c) => {
        const data = await axios.get(`https://thecocktaildb.com/api/json/v1/1/filter.php?c=${c}`);
        setcocktails(data.data.drinks);
    }

    return (
        <div className='menu'>
            <ul>
                {list && (
                    list.map(category => (
                        <li onClick={() => filterCategory(category.strCategory)}>{category.strCategory}</li>
                    ))
                )}
            </ul>
        </div>
    )
}

export default Menu