import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Style/Personagens";

export default function Personagens() {
  const Api = "https://hp-api.herokuapp.com/api/characters";
  const [personagem, setPersonagem] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => {
      console.log(response.data);
      setPersonagem(response.data.slice(0, 25));
    });
  }, [Api]);

  return (
    <div>
      <S.GlobalStyle />
      <S.section>
        {personagem.map((item) => (
          <div>
            <S.h3>{item.name}</S.h3>
            <S.div>
              <S.img src={item.image} alt={item.name} />
              <ul>
                <S.li>
                  <strong>Espécie:</strong> {item.species}
                </S.li>
                <S.li>
                  <strong>Gênero:</strong> {item.gender}
                </S.li>
                <S.li>
                  <strong>Casa:</strong> {item.house}
                </S.li>
              </ul>
            </S.div>
          </div>
        ))}
      </S.section>
    </div>
  );
}
