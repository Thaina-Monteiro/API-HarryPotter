import React from "react";
import Brasao from "../img/brasao2.jpg";
import * as S from "../Style/Header";

export default function Personagens() {
  return (
    <div>
      <S.GlobalStyle />
      <S.Brasao src={Brasao} alt="HP" />
    </div>
  );
}
