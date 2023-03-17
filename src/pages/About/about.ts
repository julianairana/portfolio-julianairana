import styled from "styled-components";

export const ContainerAbout = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;

    .divText {
        width: 65%;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }

    img {
        width: 300px;
        margin-top: 15px;
    }

    h1 {
        color:#A7F0BA;
        width: 70%;
        text-align: center;
    }

    h3 {
        color: #979797;
    }

    /* .divAbout {
        border-top: 1px solid #2A9918;
        margin-top: 20px;
        display: flex;
        align-items: center;
        
    } */

    p {
        width: 65%;
        margin-top: 20px;
        color: #ffff;
        text-align: center;
    }

    .divIcons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-top: 50px;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        margin-top: 40px;
        margin-bottom: 30px;
    }

    .imgIcons {
        width: 70px;
        height: 70px;
    }


`