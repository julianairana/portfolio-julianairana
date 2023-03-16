import { Header } from "../../componentes/Header"
import { ContainerAbout } from "./about"
import about from "../../img/About.png"

export const About = () => {
    return(
    <>
        <Header/>
        <ContainerAbout>
            <div className="divText">
            <h1>Olá, me chamo Juliana!</h1>
            <img src={about} alt="" />
            <p>Sempre fui ligada a tecnologia, curiosa também, procurava entender como as coisas funcionavam por debaixo dos panos. Estou fazendo pela segunda vez a faculdade de Tecnologia em Gestão da Tecnologia da Informação, da primeira vez não conclui, mas dessa vez estou conseguindo prosseguir, foi voltando os estudos voltados para essa área, que eu me vi pesquisando um pouco mais e encontrando o desenvolvimento web, pois queria algo mais prático do que teórico.
</p>

            </div>

        </ContainerAbout>

    </>

    )
}