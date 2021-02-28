import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const RecipeStyled = styled(Link)`
    background-color: #FFDFD3;
    border-radius: 100px 30px 30px 100px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    height: 100px;
    width: 30%;
    margin-bottom: 4rem;
    text-decoration: none;
    color: #000;

    &:hover {
        color: #000;
        text-decoration: underline;
}
`;

const ImageStyled = styled.div`
    background-image: url("https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 100%;
    min-width: 130px;
    min-height: 130px;
`;

const InfoStyled = styled.div`
    /* background-color: pink; */
    margin-left: 3%;
    width: 58%;

    h3 {
        font-size: 1rem;
        font-weight: 600;
    }
`;

const Recipe = () => {


    return (
        <RecipeStyled to="/">
            <ImageStyled></ImageStyled>
            <InfoStyled>
                <h3>Kind a long title for a plate of healthy food</h3>
            </InfoStyled>
        </RecipeStyled>
    )
}

export default Recipe
