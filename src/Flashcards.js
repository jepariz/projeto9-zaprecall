import styled from "styled-components"
import play from "./img/play.svg"
import perguntas from "./perguntas"
import respostas from "./respostas"



export default function FlashCards (){
    return (
        <ContainerPerguntas>
            {perguntas.map((p, index)=> 
            <div>
            <p>Pergunta {[index + 1]} </p>
             <img src={play} />
            </div>
            )}
            
        </ContainerPerguntas>
    )
}

const ContainerPerguntas = styled.div`
margin-top: 50px;
width: 90%;
height: auto;
display: grid;
justify-content: center;
gap: 20px;
margin-bottom: 180px;

div{
    width: 300px;
    height: 65px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 10px;
    box-shadow: 0px 4px 5px 0px #00000026;

}

p{
    font-family: 'Recursive', sans-serif;
    font-weight: 700;
    font-size: 16px;
    color: #333333;
}

img{
    width: 20px;
    height: 23px;
}

`
