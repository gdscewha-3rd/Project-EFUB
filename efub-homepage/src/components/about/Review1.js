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
    width: 20%auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Text=styled.div`
    color:white;
    font-size: 20px;
    text-align: left;
    line-height:160%;
    width:80%;
`

function Review1({icon, text}) {
    return (
        <Wrapper>
            <Logo img src={icon}/>
            <Text>{text}</Text>
            
        </Wrapper>

    )
}

export default Review1;
