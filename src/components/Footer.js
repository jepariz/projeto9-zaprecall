import styled from "styled-components";

export default function Footer() {
  return (
    <Rodape>
      <ContainerBotoes>
        <button>Não Lembrei</button>
        <button>Quase Lembrei</button>
        <button>Zap!</button>
      </ContainerBotoes>
      <span>0/8 CONCLUÍDOS</span>
    </Rodape>
  );
}

const Rodape = styled.div`
  width: 100%;
  height: 111px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;

  span{
    font-family: 'Recursive', sans-serif;
    font-size: 18px;
    color: #333333;
  }
`;

const ContainerBotoes = styled.div`
  padding: 20px;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  box-sizing: border-box;
  button {
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 12px;
    text-align: center;
    font-family: 'Recursive', sans-serif;
    &:nth-child(1){
        background-color: #FF3030;
    }

    &:nth-child(2){
        background-color: #FF922E;
    }

    &:nth-child(3){
        background-color: #2FBE34;
    }
  }
  
`;
