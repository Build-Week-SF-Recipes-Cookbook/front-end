import React from 'react'
import styled from 'styled-components'
import { BsSearch, BsForward } from 'react-icons/bs';

const FormStyled = styled.form`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center; //vertical
    align-items: center; //horizontal
    background-color: #FFF;
    border-radius: 100px;
    box-shadow: 0 0 15px rgba(0,0,0,0.4);

    span {
        display: none;
    }
    label {
        display: inline;
        margin: 0;
    }
    label i {
        border-right: 2px solid #FF8C00;
        color: #FF8C00;
        font-size: 1.2rem;
        padding: 0 1.5rem;
    }
    label input {
        display: inline;
        border: none;
        outline: none;
        font-size: 1rem;
        padding: 0.8rem 1.5rem;
        width: 500px;
    }
    button {
        display: inline;
        background-color: #FF8C00;
        border: none;
        border-radius: 100px;
        color: #FFF;
        font-size: 1.5rem;
        outline: none;
        margin-right: 0.4rem;
        padding: 0rem 0.4rem 0.2rem;
    }
    button i {
    }
`;

const Search = () => {
    return (
        <FormStyled>
            <label>
                <span>Search</span>
                <i><BsSearch /></i>
                <input type="text" name="search" placeholder="What do you want to cook?" />
            </label>
            <button><BsForward /></button>
        </FormStyled>
    )
}

export default Search
