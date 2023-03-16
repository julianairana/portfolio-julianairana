import { Link } from "react-router-dom";
import { Header } from "../../componentes/Header";
import linkedin from "../../img/IconLinkedin.png";
import github from "../../img/IconGitHub.png";
import curriculo from "../../img/IconCurriculo.png";
import { ContainerContacts } from "./contacts";

export const Contacts = () => {
    return(
    <>
        <Header/>
        <ContainerContacts>
            <h1>Me encontre em qualquer uma dessas plataformas...</h1>
            <div className="divIcons">
            <Link to="https://www.linkedin.com/in/julianaairana/" target="_blank">
                <img src={linkedin} alt="Linkedin" />
            </Link>
            <Link to="https://github.com/julianairana" target="_blank">
                <img src={github} alt="GitHub" />
            </Link>
            <Link to="https://docs.google.com/document/d/11texfqqZgjk3R4USLMp7zWdQcVp3IyttE2IKiASEq48/edit?usp=sharing" target="_blank">
                <img src={curriculo} alt="Currículo" />
            </Link>
            </div>
        </ContainerContacts>
    </>

    )
}