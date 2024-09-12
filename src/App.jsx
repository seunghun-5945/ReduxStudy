import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: lightgreen;
`;

const App = () => {

  const humanList = useSelector((state) => state.human.value);

  return (
    <Container>
      <h1>목록: {humanList}</h1>
      <Link to="/AddHuman">사람 추가하기</Link>
    </Container>
  );
};

export default App;