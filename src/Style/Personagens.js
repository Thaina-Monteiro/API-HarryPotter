import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  @import url('@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');');
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    color: black;
  }
`;

export const section = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const img = styled.img`
  width: 200px;
  height: 300px;
`;

export const div = styled.div`
  margin: 10px 15px 40px 10px;
`;

export const li = styled.li`
  text-align: center;
`;
export const h3 = styled.h3`
  text-align: center;
`;
