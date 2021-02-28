import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search';

const HeroStyled = styled.section`
    background-color: pink;
    border-radius: 20px;
    display: flex;
    margin: 2rem auto 0;
    width: 100%;
    height: 80vh;
    max-width: 1360px;

`;

const Hero = () => {
    return (
        <HeroStyled>
            <h2>secret recipes</h2>
            <p>to cook from around the world.</p>
            <p>to cook from around the world.</p>
            <Search />
        </HeroStyled>
    )
}

export default Hero
