import Recipe from "./Recipe";

export default function DisplayRecipes({data}){
 //  const [strMeal] = data[0];
// const menus = meals;
    console.log(data.meals);
   
    return (
        <div className='containerRecipe'>

            {data.meals.map((meal, index) => (
            <Recipe
                key={index}
                title={meal.strMeal}
             />
             ))}
        
        </div>
    );
}