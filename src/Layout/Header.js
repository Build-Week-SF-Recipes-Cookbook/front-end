import React from 'react'
import styled from 'styled-components'

const HeaderStyled = styled.header`
    background-color: pink;
`;

function Header() {
    return (
        <HeaderStyled>
            <h1>
                <span>YUMMY</span>
                <span>APP</span>
            </h1>
        </HeaderStyled>
    )
}

export default Header
