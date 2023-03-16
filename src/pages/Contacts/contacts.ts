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

`