import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    height:auto;
`
const Logo = styled.img`
    width: 20%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    margin-right: 1.5rem;
`;
const TextBox=styled.div`
    background-color: #1C1C1C;
    border-radius: 10px;
    color:white;
    font-size: 20px;
    text-align: left;
    line-height:160%;
    width:80%;
    height: 100%;
`
const Text=styled.div`
    color:white;
    font-size: 20px;
    text-align: left;
    align-items: center;
    justify-content: center;
    line-height:160%;
    width:90%;
`

function Review1({profile, text}) {
    return (
        <Wrapper>
            <TextBox> 
                <Text>{text}</Text>
            </TextBox> 
            <Logo src={profile}/>
        </Wrapper>

    )
}

export default Review1;
