import { Link } from "react-router-dom"
import { ContainerHeader } from "./header"

export const Header = () => {
    return(
    <ContainerHeader>
        <Link to={"/"}>Início</Link>
        <Link to={"/about"}>Sobre</Link>
        <Link to={"/projects"}>Projetos</Link>
        <Link to={"/contacts"}>Contatos</Link>
    </ContainerHeader>

    )
}