import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useListContext } from "./ListContext";

const SearchBar = () => {
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const { updateIdArray, updateSectionId } = useListContext();

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            const response = await fetch(`http://localhost:5000/search/?searchValue=${searchValue}`);
            const jsonResponse = await response.json();
            
            setSearchResults(jsonResponse.data);
            updateSectionId("Search Results");
            updateIdArray(jsonResponse.data.map(e => parseInt(e.id)));
        } 
        catch (err) {
            console.log(err.message)
        }
    }
    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="recipe lookup..."
                onChange={e => setSearchValue(e.target.value)} />
            </StyledForm>
            <ul>
                {searchResults && 
                searchResults.map(result => {
                    return (
                        <li key={uuidv4()}>
                            <Link to={`/recipe/${result.id}`}>{result.recipe_name} →</Link>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}

const StyledForm = styled.form`
    margin: 1rem;
    text-align: center;
    input {
        padding: 0.4rem;
        font-size: 1.3rem;
        font-style: italic;
        border-radius: 1rem;
        border: none;
        color: black;
    }
    input:focus {
        outline: 0;
    }

`
export default SearchBar