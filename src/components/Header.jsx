import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {

    return (
        <StyledWrapper>
            <Link to="/">Mon Grimoire</Link>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    padding: 0.25rem;
    text-align: center;
    /* border-bottom: 2px solid black; */
    a {
        font-size: clamp(1rem, 15vw, 5rem);
        /* color: darkred; */
    }
`

export default Header