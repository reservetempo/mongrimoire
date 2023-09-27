import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { handleGet } from "../handlers/handleGet";
import Recipe from "./Recipe";

const RecipeViewer = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState({});

    const getData = async (id) => {
        const recipeData = await handleGet(`/recipes/${id}`);
        setRecipe(recipeData);
    }

    useEffect(() => {
        getData(id);
    }, [id])

    return (
        <div> hello
            {recipe && <Recipe recipe={recipe} />}
        </div>
        
    )
}

export default RecipeViewer