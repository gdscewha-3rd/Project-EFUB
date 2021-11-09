import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const InfoBox = styled.div``;

const ContactPage = () => {
  return (
    <>
      <h1>CONTACT</h1>
      <p>문의 사항을 남겨주시면 이메일로 답변을 보내드립니다.</p>
      <InfoBox>
        <h4>Email</h4>
        <h4>문의내용</h4>
      </InfoBox>
      <Button>전송하기</Button>
    </>
  );
};

export default ContactPage;
