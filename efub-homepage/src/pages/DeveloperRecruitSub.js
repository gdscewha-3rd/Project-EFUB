import React, { useState } from "react";
import styled from "styled-components";
import palette from "../lib/styles/palette"
import Button from "../components/common/Button";

const Banner = styled.div`
    height: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    //justify-content: center;
    width: 35rem;
    height: 50rem;
`
const Foot = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2.5rem;
    justify-content: space-between;
`
const FootSub = styled.div`
    width: 41%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
const TextBox = styled.div`
    width: 100%;
    height: 9rem;
    border-radius: 14px;
    background-color: rgba(225, 225, 225, 0.15);
    margin-bottom: 2.5rem;
`
const Text1 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 1rem;
    margin-bottom: 1rem;
    line-height: 1.725rem; //28px
`
const Text2 = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 0.8rem;
    line-height: 1.725rem; //28px
`
const Input = styled.input`
    font-size: 1rem;
    font-weight: 300;
    border: none;
    background: black;
    border-bottom: 2px solid ${palette.white};
    color: ${palette.white};
    outline: none;
    padding-bottom: 0.5rem;
    margin-bottom: 2.5rem;
    width: 100%; 
`
const DeveloperRecruitSub = () => {
    return <div> 
        <Banner>
            <h1 style = {{height: '3.5rem', marginBottom: '0.01rem'}} >DEVELOPER</h1>
            <h6 style = {{marginTop: '0.001rem'}}>지원서 작성</h6>
        </Banner>
        <Main>
            <Text1>1. EFUB에 지원하게된 동기를 적어주세요 (300자 내외)</Text1>
            <TextBox/>
            <Text1>2. 동아리에 들어온다면 하고 싶은 프로젝트에 대해서 간략히 설명해주세요.(100자 내외)</Text1>
            <TextBox/>
            <Text1>3. 지원 분야를 선택해주세요.</Text1>
            <Text2 style = {{marginBottom: '2rem'}}>3번 문항의 답변에 따라 인턴 지원서 혹은 리드 지원서 페이지로 넘어가게 되니신중히 체크해 주세요!</Text2>
            <Text1>4. 자신 있는 프로그래밍 언어를 적어주세요.</Text1>
            <Input/>
            <Text1>4-1. 위에서 답한 언어에 대한 자신감을 5점 만점으로 평가해주세요.</Text1>
            <Text1>5. 사용할 수 있는 디자인 툴을 모두 선택해주세요.</Text1>
            <Foot>
            <Text2>2/3 페이지</Text2>  
                <FootSub>
                    <Button blue>저장</Button>
                    <Button filled>다음</Button>
                </FootSub>
            </Foot>
        </Main>
    </div>
};

export default DeveloperRecruitSub;