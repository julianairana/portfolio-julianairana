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

export const About = () => {
    return (
        <>
            <Header />
            <ContainerAbout>
                <div className="divText">
                    <h1>Olá, me chamo Juliana!</h1>
                    <img src={about} alt="" />
                    <p>Sempre fui ligada a tecnologia, curiosa também, procurava entender como as coisas funcionavam por debaixo dos panos. Estou fazendo pela segunda vez a faculdade de Tecnologia em Gestão da Tecnologia da Informação, da primeira vez não conclui, mas dessa vez estou conseguindo prosseguir, foi voltando os estudos voltados para essa área, que eu me vi pesquisando um pouco mais e encontrando o desenvolvimento web, pois queria algo mais prático do que teórico.
                    </p>
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
                    </ul>
                    </div>
                    </div>
              

            </ContainerAbout>

        </>

    )
}