import { Header } from "../../componentes/Header";
import { ContainerHome } from "./homePage";
import logo from"../../img/Logo.png";

export const HomePage = () => {
    return(
    <>
        <Header/>
        <ContainerHome>
            <div className="divImg">
                <img src="" alt="" className="imgOne "/>
                <img src={logo} alt="" className="logo"/>
                <img src="" alt="" className="imgTwo" />
                <img src="" alt="" className="img" />
            </div>
        </ContainerHome>
    </>

    )
}