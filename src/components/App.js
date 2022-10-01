import logo from "../img/logo.png";
import styled from "styled-components";
import FlashCards from "./Flashcards";
import GlobalStyle from "../GlobalStyle";


export default function App() {
  


  return (
    <Body>
      <GlobalStyle />
      <ContainerLogo>
        <img src={logo} />
        <h1>ZapRecall</h1>
      </ContainerLogo>
      <FlashCards/>
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

