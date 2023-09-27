import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useListContext } from "./ListContext";

const Ingredients = ({ing}) => {
    return (
        <div>
            <StyledSubtitle>
                <h2>Ingredients</h2>
            </StyledSubtitle>
           
            <ul>
                {ing.map(e => {
                    return (
                        <StyledItem key={uuidv4()}><p>{e}</p></StyledItem>
                    )
                })}
            </ul>
        </div>

    )
}
const Preparation = ({prep}) => {
    return (
        <div>
            <StyledSubtitle>
                <h2>Preparation</h2>
            </StyledSubtitle>
            <ul>
                {prep.map(e => {
                    return (
                        <StyledItem key={uuidv4()}><p>{e}</p></StyledItem>
                    )
                })}
            </ul>
        </div>
       
    )
}
const StyledItem = styled.li`
    margin: 0.4rem;

`
const StyledSubtitle = styled.div`
    margin: 0.5rem;
    border-bottom: 2px solid black;
    h2 {
        padding: 0.5rem;
    }
`

const Recipe = ({recipe}) => {
    const { 
        id,
        recipe_months, 
        recipe_name, 
        recipe_type, 
        recipe_author, 
        drink_pairing, 
        section1_name, 
        section1_ing, 
        section1_prep, 
        section2_name, 
        section2_ing, 
        section2_prep, 
        section3_name, 
        section3_ing, 
        section3_prep } = recipe;
        console.clear()
        const { idArray } = useListContext();
        // const recipeIndex = idArray.findIndex(e => e === parseInt(id));
    return (
        <div>
            {recipe &&
                <div>
                    <StyledWrapper>
                        <p>{recipe_months}</p>
                        <StyledTitle>
                            {/* <StyledLink to={`/recipe/${idArray[recipeIndex === 0 ? idArray.length - 1 : recipeIndex- 1]}`}>←</StyledLink>
                            <h1>{recipe_name}</h1>
                            <StyledLink to={`/recipe/${idArray[recipeIndex === idArray.length - 1 ? 0 : recipeIndex + 1]}`}>→</StyledLink> */}
                        </StyledTitle>
                
                        
                        {recipe_author && <p>By {recipe_author}</p>}
                    </StyledWrapper>
                    <StyledWrapper>
                        {section1_ing &&<Ingredients ing={section1_ing} />}
                    </StyledWrapper>
                    <StyledWrapper>
                        {section1_prep &&<Preparation prep={section1_prep} />}
                    </StyledWrapper>
                    <p>{drink_pairing}</p>
                    {id && <Link to={`/form/${id}`}>Update recipe {id}</Link>}
                </div>
            }

        </div>
    )
}

const StyledWrapper = styled.div`
    margin: 0.rem;
    padding: 0.2rem;
`
const StyledTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
        font-size: 1.5rem;
    }
    

`
const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
`

export default Recipe