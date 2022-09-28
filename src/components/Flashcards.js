import { useState } from "react"
import styled from "styled-components"
import play from "../img/play.svg"
import setinha from "../img/setinha.png"
import perguntas from "./perguntas"
import respostas from "./respostas"



export default function FlashCards (){

const [flashCardClicado, setFlashCardClicado] = useState([])

function mostrarPergunta (index){
    if(!flashCardClicado.includes(index)){
        const novoArray = [...flashCardClicado, index]
        setFlashCardClicado(novoArray)
    }
}

// function mostrarResposta (index){
//     if()
// }

    return (
        <ContainerPerguntas >
            {perguntas.map((p, index)=> 
            <Pergunta flashCardClicado={flashCardClicado.includes(index)} key={index} onClick={() => mostrarPergunta(index)}>
            {flashCardClicado.includes(index)? <p>{p}</p> : <p>Pergunta {[index + 1]} </p>}
             <img src={flashCardClicado.includes(index)? setinha : play} />
            </Pergunta>
            )}
            
        </ContainerPerguntas>
    )
}

const ContainerPerguntas = styled.ul`
margin-top: 50px;
width: 90%;
height: auto;
display: grid;
justify-content: center;
gap: 20px;
margin-bottom: 180px;
`

const Pergunta = styled.li`
    width: 300px;
    height: ${props => props.flashCardClicado === true ? "131px" : "65px"};
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0px 4px 5px 0px #00000026;
    position: relative;

p{
    font-family: 'Recursive', sans-serif;
    font-weight:${prop => prop.flashCardClicado ? "400" : "700"};
    font-size: 16px;
    color: #333333;
}

img{
    width: ${prop => prop.flashCardClicado ? "30px" : "20px"};
    height:${prop => prop.flashCardClicado ? "20px" : " 23px"};
    position: absolute;
    left: 260px;
    bottom: ${prop => prop.flashCardClicado ? "13px" : "20px"}
}

`
