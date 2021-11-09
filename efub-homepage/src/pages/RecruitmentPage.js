import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import palette from "../lib/styles/palette";

import Arrow from "../assets/recruitment/arrow.png";

const RecruitBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 92%;
  height: 30rem;
  padding: 1rem 3rem 1rem 3rem;
  background-color: rgba(225, 225, 225, 0.15);
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
  height: 20rem;
  justify-content: space-around;
`;

const ButtonItems = styled.div`
  display: flex;
  flex-direction: column;
  height: 8rem;
  justify-content: space-between;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ImgBox = styled.img`
  width: 3rem;
  height: 3rem;
`;

const buttons = [
  {
    name: "developer",
    text: "개발자로 지원하기",
    link: "/developerRecruit",
  },
  {
    name: "designer",
    text: "디자이너로 지원하기",
    link: "/designerRecruit",
  },
];

const RecruitmentPage = () => {
  const [select, setSelect] = useState("all");
  return (
    <>
      <h1>RecruitmentPage</h1>
      <RecruitBox>
        <TextBox>
          <h2>EFUB 1st Recruiting</h2>
          <h1>
            EWHA <br />
            FRONT-END <br />
            UI/UX <br />
            BACK-END
          </h1>
          <p>
            지원분야 | UI/UX 디자인, 프론트/백엔드 개발 <br />
            모집기간 | 2021/09/01 ~ 09/07 23:59까지
          </p>
        </TextBox>
        <ButtonBox>
          <Link to="/list">
            <ListBox>
              <h2>
                합격자 조회 <br />
                바로가기
              </h2>
              <ImgBox src={Arrow} />
            </ListBox>
          </Link>
          <ButtonItems>
            {buttons.map((b) => (
              <Link to={b.link}>
                <Button
                  filled={b.name !== select}
                  onClick={() => setSelect(b.name)}
                  style={{}}
                >
                  {b.text}
                </Button>
              </Link>
            ))}
          </ButtonItems>
        </ButtonBox>
      </RecruitBox>
    </>
  );
};

export default RecruitmentPage;
