import styled from "styled-components";
import SearchBar from "./SearchBar";
import LinksSection from "./LinksSection";

const months = [ "January * February", "March * April", "May * June", "July * August", "September * October", "November * December"];
const categories = ["Desserts", "Mains", "Sides", "Index"];

const Homepage = () => {

    return (
        <StyledWrapper>
            <StyledSubtitle>Cooking Magic Throughout the Year</StyledSubtitle>
            <StyledImage src="/public/images/1999.jpg" />
            <SearchBar />
            <div>
                <LinksSection title={"View recipes by seasons"} linkName={months}/>
                <LinksSection title={"Other Sections"} linkName={categories}/>
                <LinksSection title={"About the book"} />
            </div>
     </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const StyledSubtitle = styled.p`
    font-style: italic;
    text-align: center;
    margin-bottom: 0.4rem;
    font-size: clamp(1.1rem, 5vw, 1.5rem);

`
const StyledImage = styled.img`
    width: 100vw;
`


export default Homepage