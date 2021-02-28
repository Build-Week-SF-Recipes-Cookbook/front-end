import React from 'react'
import styled from 'styled-components'
import Search from '../components/Search';

const HeroStyled = styled.section`
    background-image: url("https://images.unsplash.com/photo-1513135124264-0dc58db0a576?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
    color: #FFF;
    display: flex;
    flex-flow: column wrap;
    justify-content: center; //vertical
    align-items: flex-start; //horizontal
    margin: 2rem auto 0;
    padding: 0 4rem;
    width: 90%;
    height: 80vh;
    max-width: 1360px;


    h2 {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 0.5rem;
    }

    p:nth-child(3) {
        margin-bottom: 1rem;
    }

`;

const Hero = () => {
    return (
        <HeroStyled>
            <h2>Shhh! this is a secret...</h2>
            <p>family recipes to cook from around the world.</p>
            <p>Type below and start cooking</p>
            <Search />
        </HeroStyled>
    )
}

export default Hero
