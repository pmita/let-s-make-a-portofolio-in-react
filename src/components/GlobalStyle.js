import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    *::before,
    *::after{
        box-sizing: inherit;
    }

    body{
        background: #1b1b1b;
        font-size: 62.5%inherit;
        line-height: 1.3;
    }

    button{
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: #23d997;
            color: white;
        }
    }

    h2{
        font-weight: lighter;
        font-size: 4rem;
    }

    h3{
        color: white;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
    }

    span{
        font-size: bold;
        color: #23d997;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
    }
`;

export default GlobalStyle;