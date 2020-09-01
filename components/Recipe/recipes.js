import React, {useState} from 'react'
import spoonacularAPI from '../../utils/spoonacularAPI';

const Recipes = () => {
    const [recipes, setRecipes ] = useState(false)

    componentDidMount()
{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPI}`)
    .then(res => res.json())
    setRecipes({ recipes: res})
    .catch(error)
    };



    return (
        <div>
            {JSON.stringify(recipes)}
        </div>
    )
}





export default Recipes;