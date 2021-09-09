import React from "react";
import styled from "styled-components";

const HeaderTitle = styled.div`
    color: #e8e8e8;
    background-color: black;
    border: 2px solid grey;
    border-radius: 3px;
    width: 60%;
    margin: 0 auto;
    padding: 10px;
    font-family: 'Montserrat', sans-serif;
`;

function Header(data){
    console.log(data);
    if (!data.body) return <h3>Waiting...</h3>;
    return (
        <HeaderTitle>
            <h1>Nasa's Photo of the Day: Andromeda</h1>
        </HeaderTitle>
    )
}

export default Header;