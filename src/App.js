import React from "react";
import Home from "./componets/Home";
import Personagens from "./componets/Personagens";
import Hp from "./img/hp.jpg";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as S from "./Style/Header";

export default function App() {
  return (
    <BrowserRouter>
      <S.GlobalStyle />
      <S.Header>
        <S.Div>
          <S.imagem src={Hp} alt="HP" />
          <S.H1>Harry Potter</S.H1>
        </S.Div>
        <S.Div>
          <S.Nav>
            <S.Ul>
              <S.Li>
                {" "}
                <strong>
                  {" "}
                  <Link to="/">Home</Link>
                </strong>
              </S.Li>
              <S.Li>
                {" "}
                <strong>
                  <Link to="/Personagens">Personagens</Link>
                </strong>
              </S.Li>
            </S.Ul>
          </S.Nav>
        </S.Div>
      </S.Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Personagens" element={<Personagens />} />
      </Routes>
    </BrowserRouter>
  );
}
