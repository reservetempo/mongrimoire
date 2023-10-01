import { Link } from "react-router-dom";
import styled from "styled-components";
import { useListContext } from "./ListContext";

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
    a {
        font-size: clamp(1rem, 15vw, 5rem);
    }
`

export default Header