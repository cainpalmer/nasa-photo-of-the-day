import React from "react";
import styled from "styled-components";

const BackDiv = styled.div`
    width: 50%;
    padding: 10px;
    margin 0 auto;
    background-color: marron;
    opacity: 0.7;
    border: solid black;
    border-radius: 2px;
`;
const Img = styled.div`
    max-width: 60%;
    border-radius: 5px;
`;
const Explanation = styled.div`
    width: 60%;
    color: maroon;
    padding: 10px;
    margin: 0 auto;
    bacdkground-color: black;
    opacity: 0.75;
    border: solid black;
    border-radius: 1px;
`;


function Body(data){
    console.log(data);
    if (!data.body) return <h3>Waiting...</h3>;
    return (
        <BackDiv>
            <Img src = {data.image}
                alt = "Andromeda" 
            />
            <Explanation>
                <p>{data.date}</p>
                <p>{data.explanation}</p>
            </Explanation>
            <img src = {data.hdurl} alt = "The Andromeda Galaxy"></img>
        <h2>{data.title}</h2>
        <h3>{data.date}</h3>
        </BackDiv>
    )
}

export default Body;