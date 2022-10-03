import { useState } from "react";
import styled from "styled-components";
import play from "../img/play.svg";
import setinha from "../img/setinha.png";
import perguntasRespostas from "./arrayPerguntasRespostas";
import check from "../img/check.png";
import wrong from "../img/wrong.png";
import question from "../img/question.png";

export default function FlashCards({icone, setIcone}) {
  const [naoLembrei, setNaoLembrei] = useState([]);
  const [quaseLembrei, setQuaseLembrei] = useState([]);
  const [zap, setZap] = useState([]);
  const [respostaExibida, setRespostaExibida] = useState([]);
  const [flashCardClicado, setFlashCardClicado] = useState([]);
  const [mostrarResposta, setMostrarResposta] = useState(false);

  function mostrarPergunta(index) {
    if (!flashCardClicado.includes(index)) {
      const novoArray = index;
      setFlashCardClicado([novoArray]);
    }
  }

  function exibirResposta(index) {
    setMostrarResposta(true);
    if (!respostaExibida.includes(index)) {
      const resposta = [...respostaExibida, index];
      setRespostaExibida(resposta);
    }
  }

  function trocarCor1(index) {
    const esquecido = [...naoLembrei, index];
    setNaoLembrei(esquecido);
    setIcone([...icone, wrong]);
    setMostrarResposta(false);
  }

  function trocarCor2(index) {
    const quase = [...quaseLembrei, index];
    setQuaseLembrei(quase);
    setIcone([...icone, question]);
    setMostrarResposta(false);
  }

  function trocarCor3(index) {
    const lembrei = [...zap, index];
    setZap(lembrei);
    setIcone([...icone, check]);
    setMostrarResposta(false);
  }

  return (
      <ContainerPerguntas>
        {perguntasRespostas.map((p, index) => (
          <Perguntas
            data-identifier="flashcard"
            key={index}
            onClick={() => mostrarPergunta(index)}
            flashCardClicado={flashCardClicado.includes(index)}
            respostaExibida={respostaExibida.includes(index)}
            naoLembrei={naoLembrei.includes(index)}
            quaseLembrei={quaseLembrei.includes(index)}
            zap={zap.includes(index)}
            ultimaPergunta={icone.length === perguntasRespostas.length}
          >
            {flashCardClicado.includes(index) ? (
              mostrarResposta ? (
                <Respostas>
                  <p data-identifier="flashcard-answer">{p.resposta}</p>
                  <div>
                    <button data-identifier="forgot-btn" onClick={() => trocarCor1(index)}>
                      Não Lembrei
                    </button>
                    <button data-identifier="almost-forgot-btn" onClick={() => trocarCor2(index)}>
                      Quase Lembrei
                    </button>
                    <button data-identifier="zap-btn" onClick={() => trocarCor3(index)}>Zap!</button>
                  </div>
                </Respostas>
              ) : icone.length === perguntasRespostas.length ? (
                <p>Pergunta {index + 1}</p>
              ) : (
                <p data-identifier="flashcard-question">{p.pergunta}</p>
              )
            ) : (
              <p>Pergunta {index + 1}</p>
            )}
            {flashCardClicado.includes(index) ? (
              mostrarResposta ? (
                ""
              ) : flashCardClicado.includes(index) &&
                respostaExibida.length === perguntasRespostas.length ? (
                <img alt="ícone" data-identifier="flashcard-show-btn"
                  src={
                    respostaExibida.includes(index)
                      ? naoLembrei.includes(index)
                        ? wrong
                        : quaseLembrei.includes(index)
                        ? question
                        : zap.includes(index)
                        ? check
                        : play
                      : play
                  }
                ></img>
              ) : (
                <img alt="ícone" src={setinha} onClick={() => exibirResposta(index)} data-identifier="flashcard-turn-btn"></img>
              )
            ) : (
              <img alt="ícone" data-identifier="flashcard-show-btn"
                src={
                  respostaExibida.includes(index)
                    ? naoLembrei.includes(index)
                      ? wrong
                      : quaseLembrei.includes(index)
                      ? question
                      : zap.includes(index)
                      ? check
                      : play
                    : play
                }
              ></img>
            )}
          </Perguntas>
        ))}
      </ContainerPerguntas>
      
  );
}

const ContainerPerguntas = styled.ul`
  margin-top: 50px;
  width: 90%;
  height: auto;
  display: grid;
  justify-content: center;
  gap: 20px;
  margin-bottom: 180px;
`;

const Perguntas = styled.li`
  width: 300px;
  height: ${(props) =>
    props.flashCardClicado
      ? props.ultimaPergunta
        ? "65px"
        : "131px"
      : "65px"};
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 10px;
  box-shadow: 0px 4px 5px 0px #00000026;
  position: relative;

  p {
    font-family: "Recursive", sans-serif;
    font-weight: ${(prop) =>
      prop.flashCardClicado ? (prop.ultimaPergunta ? "700" : "400") : "700"};
    font-size: 16px;
    color: ${(prop) =>
      prop.respostaExibida
        ? prop.naoLembrei
          ? "#FF3030"
          : prop.quaseLembrei
          ? "#FF922E"
          : prop.zap
          ? "#2FBE34"
          : "#333333"
        : "#333333"};

    text-decoration: ${(prop) =>
      prop.respostaExibida
        ? prop.naoLembrei
          ? "line-through"
          : prop.quaseLembrei
          ? "line-through"
          : prop.zap
          ? "line-through"
          : null
        : null};
  }

  img {
    width: ${(prop) =>
      prop.flashCardClicado ? (prop.ultimaPergunta ? "20px" : "30px") : "20px"};
    height: ${(prop) =>
      prop.flashCardClicado
        ? prop.ultimaPergunta
          ? "20px"
          : " 23px"
        : "20px"};
    position: absolute;
    left: 260px;
    bottom: ${(prop) => (prop.flashCardClicado ? "13px" : "20px")};
  }
`;

const Respostas = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-family: "Recursive", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${(prop) =>
      prop.respostaExibida
        ? prop.naoLembrei
          ? "#FF3030"
          : prop.quaseLembrei
          ? "orange"
          : prop.zap
          ? "green"
          : "#333333"
        : "#333333"};
    margin-bottom: 20px;
  }

  div {
    display: flex;
    gap: 10px;

    button {
      width: 85px;
      height: 37px;
      border-radius: 5px;
      border: none;
      color: #fff;
      font-size: 12px;
      text-align: center;
      font-family: "Recursive", sans-serif;
      &:nth-child(1) {
        background-color: #ff3030;
      }

      &:nth-child(2) {
        background-color: #ff922e;
      }

      &:nth-child(3) {
        background-color: #2fbe34;
      }
    }
  }
`;

