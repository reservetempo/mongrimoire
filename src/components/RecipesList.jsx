import { useEffect, useState } from "react"
import Recipe from "./Recipe";
import { v4 as uuidv4 } from "uuid";
import { handleGet } from "../handlers/handleGet";
import { Link, useParams } from "react-router-dom";
import { useListContext } from "./ListContext";

const RecipesList = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const { updateIdArray } = useListContext();

    useEffect(() => {
        const getData = async () => {
            const recipesData = 
            id === "Index" 
            ? await handleGet("/recipes/names")
            : await handleGet(`/recipes/section/${id}`);
            

            setRecipes(recipesData);
            updateIdArray(recipesData.map(e => parseInt(e.recipe_id)));
        }
        getData()
    }, [])

    return (
        <div>
            <h1>{id}</h1>
            <ol>
                {recipes &&
                recipes.map(recipe => {
                    return (
                        <li key={uuidv4()}>
                            <Link to={`/recipe/${recipe.recipe_id}`}>- {recipe.recipe_id} -{recipe.recipe_name}</Link>
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

export default RecipesList