import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/about/efub_logo.gif';
import mvp1 from '../assets/about/Mvp1.svg';
import mvp2 from '../assets/about/Mvp2.svg';
import mvp3 from '../assets/about/Mvp3.svg';
import Review1 from '../components/about/Review1';
import Review2 from '../components/about/Review2';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const MainWrapper=styled.div` // 이펍소개+버튼들
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width:100%;
    height:300px;
`
const IntroWrapper=styled.div` // 이펍소개
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 30rem;
    align-items: left;
    width:40%;
    height:100%;
`
const ReviewWrapper=styled.div` // 퍼비후기
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20rem;
    align-items: left;
    width:100%;
`

const Logo = styled.div`
    width: 228px;
    height: 205px;
    margin-top: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const MainIntroText=styled.div`
    color:white;
    font-size:  ${props => props.size || 48}px;
    margin-top: 2px;
`
const SubIntroText=styled.div`
    color:white;
    font-size:  ${props => props.size || 20}px;
    margin-top: 2px;
`

const AboutPage = () => {
    return (
        <>
        <Wrapper> 
        <Logo> <img src={logo} alt="loading..." /> </Logo>

        <MainWrapper> 
            <IntroWrapper> 
                <MainIntroText> EVERYONE'S </MainIntroText>
                <MainIntroText> FUTURE </MainIntroText>
                <MainIntroText> UPGRADE </MainIntroText>
                <MainIntroText> BY EFUB </MainIntroText>
                <SubIntroText> 리드부터 인턴, 프론트에서 백, 디자인까지 </SubIntroText>
                <SubIntroText> 함께하는 웹 개발 커리어클럽 </SubIntroText> 
            </IntroWrapper>
        </MainWrapper>

        <ReviewWrapper> 
            <h1>1기 우수 활동 퍼비의 활동 후기</h1>

            <Review1
            icon={mvp1}
            text={"안녕하세요! ☺ 저는 처음부터 우수개발자를 목표했던 것은 아니지만, 이펍에서 많이 배워야겠다는 마음으로 부족한 실력이지만 여기저기 열심히 참여하고 다녔더니 우수개발자라는 영광스러운 타이틀을 받을 수 있었던 것 같습니다! 우수 개발자라고 해서 실력순으로 선발되는 것은 아니니, 새로운 퍼비분들 마구 참여하면서 우수개발자 한 번 도전해보세요! 이번 기수의 우수개발자는 ✨아주 멋진 이펍 각인이 들어간 버티컬 마우스✨를 받았답니다…🥺 정말 잘 쓰고 있어요! 실력을 키울 수 있는 이펍에서 많이 배워가시고 활동하시길 바랄게요!(이로움, Front-end 인턴 개발자)"}
            />

            <Review2
            icon={mvp2}
            text={"이화인 개발자들과 소통하고 교류할 수 있는 장을 만들어주신 이펍 1기 임원진 분들께 진심으로 감사드립니다. 우수 개발자로 선정되려고 열심히 활동한 것은 아니었지만, 그간의 노력에 대한 보상을 받은 것 같아 뿌듯합니다. 이펍 로고가 각인된 특별한 마우스도 잘 쓰겠습니다.(박현아, Back-end 개발자)"}
            />

            <Review1
            icon={mvp3}
            text={"웹개발에 대해 하나도 모르는 초보 개발자였는데,  EFUB에서 열리는 다양한 세미나와 프로젝트 덕분에 많이 성장하게 된 것 같습니다. 그리고 기초부터 심화까지 알려주는 커리큘럼과 리드/인턴에 맞는 토이 프로젝트 배치 덕분에 프로젝트에 대한 부담 없이 재미있게 개발할 수 있었습니다. 정말 EFUB은 올해 최고의 선택이었던 것 같습니다☺(강민지, 인턴 개발자)"}
            />

        </ReviewWrapper> 

        

        </Wrapper>
        </>
    );
};

export default AboutPage;