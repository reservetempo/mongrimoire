import { Link } from "react-router-dom";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useListContext } from "./ListContext";

const Section = ({title, items}) => {
    return (
        <>
            {title && <StyledSubtitle>{title}</StyledSubtitle>}
            <StyledList>
                {items.map(item => {
                    return (
                        <StyledItem key={uuidv4()}><p>{item}</p></StyledItem>
                    )
                })}
            </StyledList>
        </>
    )
}
const StyledSubtitle = styled.h3`
    margin: 5%;
    font-size: 1.25rem;
    padding-bottom: 0.25rem;
    /* border-bottom: 2px solid var(--offwhite); */
`
const StyledList = styled.ul`   
    margin: 5% 0%;
`
const StyledItem = styled.li`
    margin: 0.5rem;
    p {
        max-width: 50ch;
        margin: 0% 3%;
        line-height: 1.4rem;
    }
`

const Recipe = ({recipe}) => {
    const { id, recipe_name, recipe_author, drink_pairing, 
        section1_name, section1_ing, section1_prep, 
        section2_name, section2_ing, section2_prep, 
        section3_name, section3_ing, section3_prep } = recipe;
    const { idArray, sectionId } = useListContext();
    const recipeIndex = idArray.findIndex(e => e === parseInt(id));

    return (
        <StyledWrapper>
            {id &&
                <div>
                    <StyledNav>
                        <StyledLink to={`/recipe/${idArray[recipeIndex === 0 ? idArray.length - 1 : recipeIndex- 1]}`}>←</StyledLink>
                        <StyledSection>{sectionId}</StyledSection>
                        <StyledLink to={`/recipe/${idArray[recipeIndex === idArray.length - 1 ? 0 : recipeIndex + 1]}`}>→</StyledLink>
                    </StyledNav>
                    <StyledTitle>{recipe_name}</StyledTitle>
                    {recipe_author && <StyledAuthor>By {recipe_author}</StyledAuthor>}
                    
                    {<Section title={section1_name} items={section1_ing} />}
                    {section1_prep && <Section items={section1_prep} />}
                    {section2_ing && <Section title={section2_name} items={section2_ing} />}
                    {section2_prep && <Section items={section2_prep} />}
                    {section3_ing && <Section title={section3_name} items={section3_ing} />}
                    {section3_prep && <Section items={section3_prep} />}

                    <StyledWineMatch>{drink_pairing}</StyledWineMatch>
                </div>
            }

        </StyledWrapper>
    )
}
const StyledWrapper = styled.div`
    display: flex;
    justify-content: center;
    >* {
        max-width: 600px;
    }
`

const StyledNav = styled.div`
    display: flex;
    justify-content: space-around;
    width: clamp(250px, 500px, 600px);
    /* max-width: 600px; */
`
const StyledSection = styled.p`
    text-align: center;
    font-size: 1.25rem;
    padding-bottom: 1rem;
`
const StyledTitle = styled.h2`
    font-size: clamp(1.4rem, 6vw, 2rem);
    text-align: center;
    max-width: 500px;
`
const StyledAuthor = styled.p`
    text-align: center;
    padding-top: 1rem;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
`
const StyledWineMatch = styled.p`
    margin: 5%;
`

export default Recipe