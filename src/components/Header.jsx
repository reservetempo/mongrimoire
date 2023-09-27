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
    /* font-style: italic; */

    padding: 0.25rem;
    text-align: center;
    a {
        font-size: clamp(1rem, 1rem + 10vw, 4rem);
        color: red;
    }
`

export default Header