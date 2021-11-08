import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const RecruitBox = styled.div`
  width: 90%;
  height: 30rem;
  background-color: rgba(225, 225, 225, 0.15);
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
        {buttons.map((b) => (
          <Link to={b.link}>
            <Button
              filled={b.name === select}
              onClick={() => setSelect(b.name)}
              style={{ marginRight: 15 }}
            >
              {b.text}
            </Button>
          </Link>
        ))}
      </RecruitBox>
    </>
  );
};

export default RecruitmentPage;
