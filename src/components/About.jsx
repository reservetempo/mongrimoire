import styled from "styled-components";
const About = () => {

    return (
        <StyledWrapper>
            <StyledSubtitle>Cooking Magic Throughout the Year</StyledSubtitle>
            <p>I hope you will enjoy Mon Grimoire - Cooking Magic Throughout the Year.</p>
            <p>A grimoire (grim-WAHR) is a textbook of magic, (also known as a "book of spells"), typically including instructions on how to create magical objects or perform magical spells. In many cases, the books themselves are believed to be infused with magical powers.</p>
            <p>While we all need food for sustenance, there have been many things written about the magical properties of food, both for health and romance. And of course, sometimes those experienced in the kitchen almost seem to perform alchemy with their ability to create something wonderful out of almost nothing.</p>
            <p>Hopefully, this book of cooking spells will help you create a little magic in your kitchen throughout the year.</p>
            <p>Fittingly, the inspiration for this book came from the magic of having children; it was to be a collection of family meals for Dominic and Mireille. In some ways, these culinary secrets are a tale of two families. The recipes of my family of Irish immigrants blended with almost 600 years of Québec culture. Along with that, on Richard's side, there is also a food connection as his great-grandfather was a confectioner and caterer in England to both royalty and Masons alike (although there were no Shriners there at that time).</p>
            <p>All these old family recipes have been melded with the formal training I received from le Cordon Bleu in Ottawa and Paris. Coupled with testing many of them with cooks of varying backgrounds, age, experience, and abilities when 1 had my cooking school, several how-to techniques have been included.</p>
            <p>The connection with magic continues with how the proceeds from the sale of this cookbook will be applied. Building upon the initiative from last year started by Lady Debbie Cavanagh, which was so successful in making a difference to those in need, I am continuing with the theme of Family. So far this year, the Tunis Ladies have restocked Chef Fezzy, the incredibly important pantry at the Shriners Hospital in Montreal, provided a mix of needed comfort items at Cornerstone House, as well as food and coffee makers to high jinx, an Ottawa Centretown social enterprise. The need continues and the Tunis Ladies will continue to respond.</p>
            <p>Special thanks go to Lady Donna Fields who has worked tirelessly last year and this year on the cookbooks projects. Thanks to our resident Sommelier: Dennis Saikaley.</p>
            <p>I hope that this endeavour of love helps you create magic in your kitchen!</p>
            <p>Andrée Riffou</p>
            <p>Tunis Shriners First Lady for 2022 and Chef forever</p>
        </StyledWrapper>
    )
}

const StyledWrapper = styled.div`
    margin: 0% 5%;
    p {
        font-size: clamp(1rem, 5vw, 1.25rem);
        padding-bottom: 0.5rem;
        line-height: clamp(1.3rem, 5vw, 1.7rem);
        max-width: 50ch;

    }
`
const StyledSubtitle = styled.p`
    font-style: italic;
    text-align: center;
    margin-bottom: 0.4rem;
    font-size: clamp(1.1rem, 5vw, 1.5rem);
`
export default About