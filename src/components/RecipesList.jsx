import { useEffect, useState } from "react"
import { v4 as uuidv4 } from "uuid";
import { handleGet } from "../handlers/handleGet";
import { Link, useParams } from "react-router-dom";
import { useListContext } from "./ListContext";
import styled from "styled-components";

const RecipesList = () => {
    const { id } = useParams();
    const [recipes, setRecipes] = useState([]);
    const { updateIdArray, updateSectionId } = useListContext();

    useEffect(() => {
        const getData = async () => {
            const recipesData = 
            id === "Index" 
            ? await handleGet("/recipes/names")
            : await handleGet(`/recipes/section/${id}`);

            updateSectionId(id)
            setRecipes(recipesData);
            updateIdArray(recipesData.map(e => parseInt(e.recipe_id)));
        }
        getData()
    }, [])

    return (
        <>
            <StyledTitle>{id}</StyledTitle>
            <StyledList>
                {recipes &&
                recipes.map(recipe => {
                    return (
                        <li key={uuidv4()}>
                            <Link to={`/recipe/${recipe.recipe_id}`}>{recipe.recipe_id}. {recipe.recipe_name.toLowerCase()} →</Link>
                        </li>
                    )
                })}
            </StyledList>
        </>
    )
}

const StyledTitle = styled.h3`
    text-align: center;
    font-size: clamp(1.25rem, 8vw, 2rem);
    padding-bottom: 1rem;
`
const StyledList = styled.ul`
    line-height: 1.5rem;
    margin: 0% 5%;
`
export default RecipesList