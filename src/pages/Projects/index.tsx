import { Header } from "../../componentes/Header";
import { ContainerProjects } from "./projects";
import peopleContact from "../../img/PeopleContact.png";
import hamburgueria from "../../img/Hamburgueria.jpeg";
import nuKenzie from "../../img/NuKenzie.jpeg";
import kenzieHub from "../../img/KenzieHub.jpeg";
import craft from "../../img/craft.jpg";
import { Link } from "react-router-dom";

export const Projects = () => {
    return(
    <>
        <Header/>
        <ContainerProjects>
            <h1>Conheça os meus Projetos...</h1>
            <div className="divProjects">
                <ul>
                <li>
                        <Link to="https://front-desafio-full-julianairana.vercel.app/" target="_blank">
                        <img src={peopleContact} alt="" />
                        <h3>People Contact</h3>
                        </Link>
                        <Link to="https://github.com/julianairana/front-desafio-full-julianairana" target="_blank">
                            <h3>Repositório</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://craft-beers.vercel.app/" target="_blank">
                        <img src={craft} alt="" />
                        <h3>Craft Beers</h3>
                        </Link>
                        <Link to="https://github.com/julianairana/teste-full-stack-julianairana/tree/main" target="_blank">
                            <h3>Repositório</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://hamburgueria-2-julianairana.vercel.app/" target="_blank">
                        <img src={hamburgueria} alt="" />
                        <h3>Hamburgueria</h3>
                        </Link>
                        <Link to="https://github.com/julianairana/hamburgueria-2-julianairana" target="_blank">
                            <h3>Repositório</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://entrega-nu-kenzie-lovat.vercel.app/" target="_blank">
                        <img src={nuKenzie} alt="" />
                        <h3>Nu Kenzie</h3>
                        </Link>
                        <Link to="https://github.com/julianairana/nu-kenzie-julianairana" target="_blank">
                            <h3>Repositório</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="https://kenzie-hub-julianairana.vercel.app/" target="_blank">
                        <img src={kenzieHub} alt="" />
                        <h3>Kenzie Hub</h3>
                        </Link>
                        <Link to="https://github.com/julianairana/kenzie-hub-julianairana" target="_blank">
                            <h3>Repositório</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </ContainerProjects>
    </>
    )
}