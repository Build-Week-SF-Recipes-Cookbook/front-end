import React from 'react'
import FormRecipe from '../components/FormRecipe'
import styled from 'styled-components'

const LogoStyled = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 90%;
    height: 74px;
    max-width: 1360px;

    h1 {
        padding: 20px 0;
        font-size: 1.8rem;
        font-weight: 800;
    }
    h1 span:nth-child(1) {
        color: #FF8C00;
    }
    h1 span:nth-child(2) {
        color: #708090;
    }
`;
const FormWrap = styled.div`
    margin: 20px auto 0;
    width: 100%;
    max-width: 500px;
`;

const NewRecipe = () => {
    return (
        <>
            <LogoStyled>
                <h1>
                    <span>YUMMY</span>
                    <span>APP</span>
                </h1>
            </LogoStyled>

            <FormWrap>
                <FormRecipe />
            </FormWrap>
        </>
    )
}

export default NewRecipe
