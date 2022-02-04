import { useState, useEffect } from 'react';
import axios from 'axios';
import './body.css';

export default function Searchbar(){
    //importer data api ici via props



    //manage state through searchbar
    const [keyword, setKeyword] = useState('');

    const handleChange = (e) => {
        setKeyword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(keyword);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='search'
                aria-label='Search'
                onChange={handleChange}
                value={keyword}
            />
            <button type='submit'>
                Search
            </button>
        </form>

    );
}