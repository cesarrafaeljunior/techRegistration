import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`


:root{

    --white: #ffffff;
    --black: #000000;

    --backgroundBody: #121214;

    --colorPrimary        : #FF577F;
    --colorPrimaryFocus   : #FF427F;
    --colorPrimaryNegative: #59323F;

    --grey4: #121214;
    --grey3: #212529;
    --grey2: #343B41;
    --grey1: #868E96;
    --grey0: #F8F9FA;


    --feedBackNegative   : #E83F5B;
    --feedBackSuccess    : #3FE864;

    --fontSize16: 16px;
    --fontSize14: 14px;
    --fontSize12: 12px;
    

    --fontWeiRegular: 400;
    --fontWeiBold: 700;



}
    body{
        width: 100%;
        height: 100%;
        background-color: var(--backgroundBody);
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter', sans-serif;
    }

    ul,ol{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        border: none;
        cursor: pointer;
    }

`;
