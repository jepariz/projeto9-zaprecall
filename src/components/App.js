import logo from "../img/logo.png";
import styled from "styled-components";
import { useState } from "react";
import FlashCards from "./Flashcards";
import GlobalStyle from "../GlobalStyle";
import Footer from "./Footer";


export default function App() {
  const [icone, setIcone] = useState([]);  


  return (
    <Body>
      <GlobalStyle />
      <ContainerLogo>
        <img alt="logo" src={logo} />
        <h1>ZapRecall</h1>
      </ContainerLogo>
      <FlashCards icone={icone} setIcone={setIcone}/>
      <Footer icone={icone} />
    </Body>
  );
}

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ContainerLogo = styled.div`
  margin-top: 40px;
  width: 255px;
  height: 60px;
  display: flex;
  gap: 20px;
  align-items: center;

  img {
    width: 52px;
    height: 60px;
  }

  h1 {
    font-size: 36px;
    color: white;
    font-family: "Righteous", cursive;
    font-weight: 400;
  }
`;

