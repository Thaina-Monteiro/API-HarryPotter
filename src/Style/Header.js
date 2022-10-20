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
export const H1 = styled.h1`
  font-family: "Cookie", cursive;
`;
export const Li = styled.li`
  font-family: "Cookie", cursive;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  margin: 20px 0px 20px 0px;
`;

export const imagem = styled.img`
  width: 42px;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 250px;
  margin: 10px;
  font-size: 23px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 90%;
`;

export const Div = styled.div`
  width: 100%;
  display: flex;
`;
export const Brasao = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  /* height: 100%; */
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
`;
