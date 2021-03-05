import React from 'react'
import styled from 'styled-components'

const FormStyled = styled.form`
    display: flex;
    flex-flow: column wrap;
    width: 500px;
    margin: 0 auto;

    label {
        display: flex;
        flex-flow: column wrap;
        justify-content: space-between;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: uppercase;
        color: #252525;
        width: 100%;
        margin-bottom: 1rem;
    }
    label:nth-child(4) {
        flex-flow: row wrap;
        justify-content: flex-start;
    }
    label:nth-child(4) label {
        text-transform: none;
        font-size: 0.8rem;
        font-weight: 600;
        flex-flow: row nowrap;
        justify-content: flex-start;
        margin-top: 0.5rem;
        margin-bottom: 0;
}




    input[type='text'], textarea {
        background-color: #FFF;
        border: 1px solid #FF8C00;
        border-radius: 5px;
        outline: none;
        padding: 1rem;
        font-size: 1rem;
        margin-top: 0.5rem;
    }
    button {
        background-color: #FF8C00;
        border: 0;
        border-radius: 5px;
        outline: none;
        padding: 0.8rem;
        font-size: 1rem;
        font-weight: 600;
        color: #FFF;

    }

    input[type='text']:hover,
    input[type='text']:focus,
    textarea:hover,
    textarea:focus,
    button:hover,
    button:focus {
        box-shadow: 0 0 10px rgba(255,140,0,0.3);
    }
`;

const FormRecipe = () => {
    return (
        <FormStyled>
            <label>
                Recipe name:
                <input type="text" name="title" placeholder="Grandma's Special Lasagna" />
            </label>
            <label>
                Ingredients:
                <textarea name="title" placeholder="Ingredients..." />
            </label>
            <label>
                Steps:
                <textarea name="title" placeholder="Steps..." />
            </label>
            <label>
                Visibility:
                <label><input type="radio" name="visibility" value="public" /> Public</label>
                <label><input type="radio" name="visibility" value="private" /> Private</label>
            </label>
            <button>let's cook!</button>
        </FormStyled>
    )
}

export default FormRecipe