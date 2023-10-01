import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleGet } from "../handlers/handleGet";
import Recipe from "./Recipe";

const RecipeViewer = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const getData = async (id) => {
        const recipeData = await handleGet(`/recipes/${id}`);
        setRecipe(recipeData.recipe_json);
    }

    useEffect(() => {
        getData(id);
    }, [id])

    return (
        <>
            {recipe && <Recipe recipe={recipe} />}
        </>
        
    )
}

export default RecipeViewer