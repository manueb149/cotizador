import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const HeaderH1 = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return (
        <HeaderContainer>
            <HeaderH1>{titulo}</HeaderH1>
        </HeaderContainer>
    );
}
 
export default Header;