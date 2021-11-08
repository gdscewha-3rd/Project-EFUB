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
const TextBox=styled.div`
    color:white;
    font-size: 20px;
    text-align: left;
    line-height:160%;
    width:80%;
`
const Text=styled.div`
    color:white;
    font-size: 20px;
    text-align: left;
    line-height:160%;
    width:80%;
`

function Member({position, name}) {
    return (
        <Wrapper>
            <Logo img src={icon}/>
            <TextBox> 
                <Text>{text}</Text>
            </TextBox> 
        </Wrapper>

    )
}

export default Member;
