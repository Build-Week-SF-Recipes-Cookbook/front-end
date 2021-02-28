import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const HeaderStyled = styled.header`
    /* background-color: pink; */
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
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
    nav ul{
        display: flex;
        flex-flow: row nowrap;
    }
    nav ul li {
        margin-left: 40px;
        list-style: none;
    }
`;

const LinkStyled = styled(Link)`
        color: #708090;
        font-size: 1.2rem;
        font-weight: 600;
        transition: all 0.2s ease-in-out;

        &:hover {
            color: #FF8C00;
            text-decoration: none;
        }
`;

const ButtonLink = styled(LinkStyled)`
    background-color: #FFF;
    padding: 9px 25px;
    border-radius: 100px;
    box-shadow: 0 4px 10px rgba(112,128,144,0.5);

    &:hover {
        background-color: #FF8C00;
        color: #FFF;
        box-shadow: 0 4px 10px rgba(255,140,0,0.5);
    }
    `;

function Header() {
    return (
        <HeaderStyled>
            <h1>
                <span>YUMMY</span>
                <span>APP</span>
            </h1>

            <nav>
                <ul>
                    <li>
                        <LinkStyled to="#">Login</LinkStyled>
                    </li>
                    <li>
                        <LinkStyled to="#">Sign In</LinkStyled>
                    </li>
                    <li>
                        <ButtonLink to="#">Submit Recipes</ButtonLink>
                    </li>
                </ul>
            </nav>
        </HeaderStyled>
    )
}

export default Header
