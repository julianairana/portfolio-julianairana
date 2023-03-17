import styled from "styled-components";
import profileOne from "../../img/ProfileOne.png";
import hoverOne from "../../img/HoverOne.png";
import profileTwo from "../../img/ProfileTwo.png";
import hoverTwo from "../../img/Hovertwo.png";
import logoMobile from "../../img/ProfileMobile.png";
import mobileProfile from "../../img/MobileProfile.png";

export const ContainerHome = styled.div`
    width: 100%;
    display: flex;

    .divImg {
        display: flex;
        width: 100%;
        height: 100%;
        justify-content: center;
        margin-top: 30px;
    }

    .imgOne {
        width: 243px;
        background-image: url(${profileOne});
        background-repeat: no-repeat;
        transition: 600ms;
    }

    .imgOne:hover{
        background-image: url(${hoverOne});
    }

    .imgTwo {
        width: 243px;
        background-image: url(${profileTwo});
        background-repeat: no-repeat;
        transition: 600ms;
    }

    .imgTwo:hover{
        background-image: url(${hoverTwo});
    }


    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        width: 100%;
        /* height: 100vh; */
        align-items: center;
        flex-wrap: nowrap;
       

        .divImg {
            width: 100%;
            max-width: 50%;
            /* height: 90%; */
            max-height: 100%;
            display: flex;
        }

        .imgOne, .imgTwo, .logo {
            display: none;
            background-image: url(${logoMobile});
        }
        
        .img {
            background-image: url(${logoMobile});
            background-repeat: no-repeat ;
            display: flex;
            width: 100%;
            max-width: 100%;
        }
        
        @media (max-width: 415px) {

            .img {
                background-image: url(${mobileProfile}) ;
                
            }
      
    }
    }
`