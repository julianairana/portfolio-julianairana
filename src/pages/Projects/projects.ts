import styled from "styled-components";

export const ContainerProjects = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    flex-direction: column;

    h1 {
        color:#A7F0BA;
        width: 70%;
        text-align: center;
    }

    .divProjects {
        width: 100%;
        margin-top: 80px;
        display: flex;
        justify-content: center;
        overflow: auto;
        max-height: 400px;
    }
    .divProjects::-webkit-scrollbar {
        width: 10px; 
        }

    .divProjects::-webkit-scrollbar-thumb {
        background-color: #888; 
        }

    .divProjects::-webkit-scrollbar-thumb:hover {
        background-color: #555;
        }

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        animation: animation 1.5s ease-in;
        transform: 1.5s ease-in;
        width: 65%;
        flex-direction: row;
        margin-top: 10px;
        
    }

    img {
        width: 300px;
        height: 190px;
        border-radius: 7px;
    }

    img:hover{
        border: 2px solid #A7F0BA;
        transform: scale(1.1);
    }

    h3 {
        text-align: center;
        margin-top: 7px;
        color:#979797;
    }

    h3:hover {
        color: #A7F0BA;
        transform: scale(0.9);
    }

    @media (max-width: 700px) {
        text-align: center;

        ul {
            display: flex;
            flex-direction: row;
            gap: 30px;
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