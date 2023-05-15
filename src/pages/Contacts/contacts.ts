import styled from "styled-components";

export const ContainerContacts = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 90px;

    .divIcons {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        margin-top: 120px;
    }

    h1 {
        color:#A7F0BA;
        width: 70%;
        text-align: center;
    }

    img {
        width: 100px;
        animation: animation 1.5s ease-in;
        transform: 1.5s ease-in;
    }

    img:hover {
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        text-align: center;

        .divIcons {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
        }

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