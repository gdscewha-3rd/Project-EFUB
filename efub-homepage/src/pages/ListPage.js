import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const ListPage = () => {
  return (
    <>
      <h1>합격자 조회</h1>
      <Link to="/firstList">
        <Button>조회하기</Button>
      </Link>
    </>
  );
};

export default ListPage;
