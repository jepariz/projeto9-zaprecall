import styled from "styled-components"
import arrayPerguntasRespostas from "./arrayPerguntasRespostas"
import Pergunta from "./Pergunta";

export default function Resposta({setFlashCardClicado, flashCardClicado, setRespostaExibida, respostaExibida, mostrarResposta, numeroPergunta}) {

   


return (
    <>
      {arrayPerguntasRespostas.map((p, index) =>
       
          <Respostas
            key={index}
            flashCardClicado={flashCardClicado.includes(index)}
          >
            <p>{p.resposta}</p> 
          </Respostas>)}
    </>
      );
      }


const Respostas = styled.li`
  width: 300px;
  height: ${(prop) => prop.flashCardClicado ? "131px" : "65px"};
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0px 4px 5px 0px #00000026;

  p {
    font-family: "Recursive", sans-serif;
    font-weight:  ${(prop) => (prop.flashCardClicado ? "400" : "700")};
    font-size: 18px;
    color: #333333;
  }
 
`;
