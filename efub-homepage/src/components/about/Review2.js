import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper=styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width:100%;
    height:200px;
`
const Profile = styled.img`
    width: 20%auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Text=styled.div`
    color:white;
    font-size:  20px;
    text-align: left;
    width:80%;
`

function Review2({icon, text}) {
    return (
        <Wrapper>
            <Text>{text}</Text>
            <Profile src={icon}/>
        </Wrapper>

    )
}

export default Review2;
