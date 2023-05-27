import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: sans-serif;
        font-style: normal;
        font-weight: 400;
        box-sizing: border-box;
    }
    body{
        background-color: #2596be;
    }
    button {
        outline: none;
        border: none;
        border-radius: 5px;
        background-color: #a328d6;
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        cursor: pointer;
        width: 100%;
        padding: 12px;
    }
`

export default GlobalStyle