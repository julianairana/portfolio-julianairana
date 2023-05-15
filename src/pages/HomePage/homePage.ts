import styled from "styled-components";
import profileOne from "../../img/ProfileOne.png";
import hoverOne from "../../img/HoverOne.png";
import profileTwo from "../../img/ProfileTwo.png";
import hoverTwo from "../../img/Hovertwo.png";
import logoMobile from "../../img/ProfileMobile.png";

export const ContainerHome = styled.div`
    width: 100%;
    display: flex;

    .divImg {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        margin-top: 30px;
        animation: logoAnimation 1.5s ease-in;
        transform: 1.5s ease-in;
    }

    .imgOne {
        width: 243px;
        background-image: url(${profileOne});
        background-repeat: no-repeat;
        transition: 600ms;
        animation: animation 2s ease-in;
        transform: 2s ease-in;
    }

    .imgOne:hover{
        background-image: url(${hoverOne});
    }

    .imgTwo {
        width: 243px;
        background-image: url(${profileTwo});
        background-repeat: no-repeat;
        transition: 600ms;
        animation: animation2 2s ease-in;
        transform: 2s ease-in;
    }

    .imgTwo:hover{
        background-image: url(${hoverTwo});
    }

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 100vh;
        align-items: center;
        flex-wrap: nowrap;
       
        .divImg {
            width: 100%;
            max-width: 50%;
            height: 90%;
            max-height: 100%;
            display: flex;
        }

        .imgOne, .imgTwo {
            display: none;
            background-image: url(${logoMobile});
        }
        
    }

    @keyframes logoAnimation {
    from {
    opacity: 0;
    transform: translateY(-70%);
    }
    to {
    opacity: 1;
    transform: translateY(0%);
    }
  }

    @keyframes animation {
    from {
      opacity: 0;
      transform: translateX(-70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }

    @keyframes animation2 {
    from {
      opacity: 0;
      transform: translateX(70%);
    }
    to {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`