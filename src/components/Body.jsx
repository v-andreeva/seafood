import DisplayRecipes from './DisplayRecipes';
import Buttons from './Buttons.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Body(){

const [data, setData] = useState({});

    useEffect(() => {
        const fetchMeals = async () => {
            const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
   
            const {data} = await axios.get(url)

            setData(data);
        };
        
        fetchMeals();

            //console.log(data.meals[0].strMealThumb);
   
    },[]);

     console.log(data);

    return (
        <main>
        <Buttons />
        <DisplayRecipes data = {data}/>
        </main>
    );
}