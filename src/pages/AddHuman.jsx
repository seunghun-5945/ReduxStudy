import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import HumanSlice, { addHuman } from "../redux/HumanSlice";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AddHuman = () => {

  const dispatch = useDispatch();
  const [name, setName] = useState('');

  useEffect(() => {
    console.log(name);
  }, [name]);

  return (
    <Container>
      <input type="text"
        placeholder="사람 이름 추가해라"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => dispatch(addHuman(name))}>사람 추가하기</button>
      <Link to="/">이전페이지로</Link>
    </Container>
  );
};

export default AddHuman;