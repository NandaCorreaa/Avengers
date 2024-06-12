import { useState } from "react"
import avengersLogo from "./assets/avengersLogo.png"
import background from "./assets/background.png"
import ironMan from "./assets/ironman.png"
import botaoIronMan from "./assets/botaoIronMan.png"
import capitaoAmerica from "./assets/capitaoAmerica.png"
import botaoCapitaoAmerica from "./assets/botaoCapitaoAmerica.png"
import thor from "./assets/thor.png"
import botaoThor from "./assets/botaoThor.png"
import hulk from "./assets/hulk.png"
import botaoHulk from "./assets/botaoHulk.png"
import viuvaNegra from "./assets/viuvaNegra.png"
import botaoViuvaNegra from "./assets/botaoViuvaNegra.png"
import panteraNegra from "./assets/panteraNegra.png"
import botaoPanteraNegra from "./assets/botaoPanteraNegra.png"
import wanda from "./assets/wanda.png"
import botaoWanda from "./assets/botaoWanda.png"
import homemAranha from "./assets/homemAranha.png"
import botaoHomemAranha from "./assets/botaoHomemAranha.png"
import styled from "styled-components"

const AppContainer = styled.body`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: #FFF;
  background-image: url(${background});
  background-size: cover;

  img {
    width: 15vw;
  }

  @media (max-width: 768px){
    height: 130vh;
    justify-content: space-evenly;
    
    img {
      width: 60vw;
    }
  }
`

const SectionVingadores = styled.section`
  display: flex;
  width: 100%;

  @media (max-width: 768px){
    flex-direction: column-reverse;
  }
`
const InfoVingadores = styled.div`
  width: 40%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  img {
    width: 17vw;
  }
  
  h1 {
    width: 50%;
    height: 4vh;
    font-size: 30px;
    word-spacing: 10px;
  }

  p {
    border-top: #47F4FF solid 3px;
    padding-top: 10px;
    width: 80%;
    height: 18vh;
    font-size: 22px;
  }

  @media (max-width: 768px){
    width: 100%;
    height: 70vh;
    justify-content: space-between;

    img {
      width: 60vw;
    }

    h1 {
      font-size: 20px;
      width: 90%;
    }

    p {
      font-size: 16px;
      width: 90%;
      height: 22vh;
    }
  }
`
const BotaoVingadores = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  div {
    width: 100%;
  }

  .botoes {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  h2 {
    font-size: 30px;
  }

  span {
    border-bottom: #47F4FF solid 3px;
    width: 90%;
  }

  img{
    width: 10vw;
    cursor: pointer;
    margin-bottom: 25px;

    &:hover{
      box-shadow: rgba(0, 200, 255, 0.3) 0px 19px 38px, rgba(0, 108, 138, 0.454) 0px 15px 12px;
      transition: 0.3s;
    }
  }

  @media (max-width: 768px){
    width: 100%;
    height: 50vh;
    background-color: #0D0D0D;
    justify-content: space-evenly;

    h2 {
      font-size: 20px;
    }

    span {
      width: 90%;
    }

    img {
      width: 20vw;
    }
  }
`

export default function App () {

  const [vingador,setVingador] = useState(ironMan)

  const vingadoresInfo = [
    {
      nome: "HOMEM DE FERRO",
      imagem: ironMan,
      botao: botaoIronMan,
      sobre: "Não tem superpoderes, mas usa uma armadura de alta tecnologia que ele inventou. Essa armadura lhe dá superforça, voo, resistência a danos, e vários armamentos avançados."
    },
    {
      nome: "CAPITÃO AMÉRICA",
      imagem: capitaoAmerica,
      botao: botaoCapitaoAmerica,
      sobre: "O Capitão América, Steve Rogers, tem força, agilidade, resistência, reflexos e velocidade sobre-humanas devido ao soro do super soldado. Ele é um mestre estrategista e combatente, e usa um escudo indestrutível como arma."
    },
    {
      nome: "THOR",
      imagem: thor,
      botao: botaoThor,
      sobre: "Thor é o deus do trovão, com força, velocidade, resistência e longevidade sobre-humanas. Ele controla trovões e relâmpagos e usa o martelo Mjolnir para voar, controlar o clima e canalizar energia mágica."
    },
    {
      nome: "HULK",
      imagem: hulk,
      botao: botaoHulk,
      sobre: "O Hulk, alter ego de Bruce Banner, tem força e resistência sobre-humanas que aumentam com sua raiva, além de uma rápida regeneração. Ao se transformar, ele se torna uma enorme criatura verde quase indestrutível."
    }
  ]
  const vingadoresInfo2 = [
    {
      nome: "VIÚVA NEGRA",
      imagem: viuvaNegra,
      botao: botaoViuvaNegra,
      sobre: "A Viúva Negra, Natasha Romanoff, é uma espiã altamente treinada e mestra em combate, disfarces e espionagem. Ela é ágil, forte e uma líder habilidosa."
    },
    {
      nome: "PANTERA NEGRA",
      imagem: panteraNegra,
      botao: botaoPanteraNegra,
      sobre: "Possui força, agilidade, resistência e sentidos aprimorados devido à erva em forma de coração.  É um excelente combatente corpo a corpo e estrategista, e usa um traje de vibranium que absorve e redistribui energia, além de ser praticamente indestrutível."
    },
    {
      nome: "FEITICEIRA ESCARLATE",
      imagem: wanda,
      botao: botaoWanda,
      sobre: "A Feiticeira Escarlate, Wanda Maximoff, tem poderes de manipulação da realidade e telecinese, sendo uma das personagens mais poderosas da Marvel."
    },
    {
      nome: "HOMEM ARANHA",
      imagem: homemAranha,
      botao: botaoHomemAranha,
      sobre: "O Homem-Aranha, Peter Parker, tem habilidades de aranha após ser picado por uma aranha. Ele possui força, agilidade, reflexos e pode escalar paredes e lançar teias."
    }
  ]

  return(
    <AppContainer>
      <img src={avengersLogo} alt="Logo dos Vingadores" />
      <SectionVingadores>
        <BotaoVingadores>
          <h2>SELECIONE UM VINGADOR</h2>
          <span></span>
          <div>
            <div className="botoes">
              {vingadoresInfo.map((item) => (
                // Cada botão é uma imagem representando um Vingador
                <img
                  src={item.botao}
                  alt={item.nome}
                  onClick={() => setVingador(item.imagem)}
                  // Quando clicado, define o Vingador selecionado como a imagem correspondente
                />
              ))}
            </div>
            <div className="botoes">
              {vingadoresInfo2.map((item) => (
                // Cada botão é uma imagem representando um Vingador
                <img
                  src={item.botao}
                  alt={item.nome}
                  onClick={() => setVingador(item.imagem)}
                  // Quando clicado, define o Vingador selecionado como a imagem correspondente
                />
              ))}
            </div>
          </div>
        </BotaoVingadores>
        <InfoVingadores>
          <img src={vingador} alt="Vingador selecionado" />
          {vingadoresInfo.map((item) => (
            // Verifica se o Vingador atual é o Vingador selecionado
            vingador === item.imagem && (
              // Se for, exibe um bloco de informações sobre o Vingador
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}
                {vingadoresInfo2.map((item) => (
            // Verifica se o Vingador atual é o Vingador selecionado
            vingador === item.imagem && (
              // Se for, exibe um bloco de informações sobre o Vingador
              <div>
                <h1>{item.nome}</h1>
                <p>{item.sobre}</p>
              </div>
            )
          ))}
        </InfoVingadores>
      </SectionVingadores>
    </AppContainer>
  )
}