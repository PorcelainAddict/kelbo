import React, {useState} from 'react'
import spoonAPI from '../../utils/spoonAPI';

const Recipes = () => {
    const [recipes, setRecipes ] = useState(false)

    componentDidMount()
{
    fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonAPI}`)
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