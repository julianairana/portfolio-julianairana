import { Header } from "../../componentes/Header";
import { ContainerAbout } from "./about";
import about from "../../img/About.png";
import html from "../../img/IconHtml.png";
import css from "../../img/IconCss.png";
import js from "../../img/IconJS.png";
import react from "../../img/IconReact.png";
import ts from "../../img/IconTS.png";
import node from "../../img/IconNode.png";
import figma from "../../img/IconFigma.png";
import python from "../../img/IconPython.png";

export const About = () => {
    return (
        <>
            <Header />
            <ContainerAbout>
                <div className="divText">
                    <h1>Olá, me chamo Juliana!</h1>
                    <img src={about} alt="" />
                    <p>Sempre fui ligada a tecnologia, curiosa também, procurava entender como as coisas funcionavam por debaixo dos panos. Atualmente estou fazendo faculdade de Tecnologia em Gestão da Tecnologia da Informação, onde eu voltei a me interessar por essa área, então procurei me profissionalizar, com isso me vi pesquisando um pouco mais e encontrando o desenvolvimento web, pois queria algo mais prático do que teórico, até que encontrei o curso de Desenvolvimento Web Full Stack, da Kenzie, onde me formei e estou me desenvolvendo e me desafiando há um ano. 
                    </p>
                    <p>Me sinto feliz e realizada nessa jornada e pretendo em breve entrar para o mercado de trabalho, de modo onde eu possa mostrar todo o meu conhecimento aprendido até então, em um local onde eu possa somar, aprender e me desafiar cada vez mais, pois na área da programação temos que estar em constate evolução.</p>
                    <div className="divIcons">
                    <h1>Essas são as tecnologias que aprendi até o momento...</h1>
                    <ul>
                        <li>
                            <img src={html} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={css} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={js} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={react} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={ts} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={node} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={figma} alt="" className="imgIcons" />
                        </li>
                        <li>
                            <img src={python} alt="" className="imgIcons" />
                        </li>
                    </ul>
                    </div>
                    </div>
            </ContainerAbout>
        </>
    )
}