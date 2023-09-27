import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import styled from "styled-components";


const LinksSection = ({title, linkName}) => {
    return (
        <StyledWrapper>
            <h3>{title}</h3>
            {linkName ?
            <ul>
                {linkName.map(e => {
                    return (
                        <li key={uuidv4()}>
                            <StyledLink to={`/recipes/${e}`}>{e}  →</StyledLink>
                        </li>
                    )
                })}
            </ul>
            :
            <>
            <p>This book was written by my mother as a way to raise money for the Shriner's hospital, and so my sister and I wouldn't have to keep asking for the recipes (I think).</p>
            <StyledLink to={"/about"}>Read more →</StyledLink>
            </>
            }
        </StyledWrapper>

    )
}

const StyledWrapper = styled.div`
    margin: 0% 5%;
    h3 {
        font-size: clamp(1.5rem, 7vw, 3rem);
        padding-bottom: 0.25rem;
        margin: 0.3rem 0;
        border-bottom: 2px solid var(--offwhite);
    }
    p {
        font-size: clamp(1rem, 5vw, 1.25rem);
        padding-bottom: 0.5rem;
        line-height: clamp(1.3rem, 5vw, 1.7rem);
        max-width: 50ch;

    }

`

const StyledLink = styled(Link)`
    font-size: clamp(1.25rem, 4vw, 3rem);
    font-style: italic;
    line-height: 1.5rem;


`

export default LinksSection