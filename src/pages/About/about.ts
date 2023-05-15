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
        animation: animation 1.5s ease-in;
        transform: 1.5s ease-in;
    }

    h1 {
        color:#A7F0BA;
        width: 70%;
        text-align: center;
    }

    h3 {
        color: #979797;
    }

    p {
        width: 65%;
        margin-top: 20px;
        color: #ffff;
        text-align: center;
        animation: animation 1.5s ease-in;
        transform: 1.5s ease-in;
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

    @keyframes animation {
    from {
      opacity: 0;
      transform: translateY(-70%);
    }
    to {
      opacity: 1;
      transform: translateY(0%);
    }
  }

`