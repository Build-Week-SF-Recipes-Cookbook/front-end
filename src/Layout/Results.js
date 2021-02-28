import React from 'react'
import styled from 'styled-components'
import Recipe from '../components/Recipe';
import Header from './Header'

const ResultsStyled = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    margin: 2rem auto 0;
    width: 90%;
    max-width: 1360px;

`;


const Results = () => {
    return (
        <>
            <Header />
            <ResultsStyled>
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </ResultsStyled>
        </>
    )
}

export default Results
