import perguntasRespostas from "./arrayPerguntasRespostas"
import styled from "styled-components";

export default function Footer ({icone}){
    return (
        <Rodape>
        <span data-identifier="flashcard-counter">
          {icone.length}/{perguntasRespostas.length} CONCLUÍDOS
        </span>
        <div>
          {icone.map((i, index) => (
            <img src={i} alt="ícone" key={index} />
          ))}
        </div>
      </Rodape>
    )
}

const Rodape = styled.div`
  width: 100%;
  height: 111px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 1;

  span {
    font-family: "Recursive", sans-serif;
    font-size: 18px;
    color: #333333;
  }

  div {
    display: flex;
    gap: 5px;
    margin-top: 10px;
  }
`;
