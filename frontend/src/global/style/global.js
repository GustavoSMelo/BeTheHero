import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        max-width: 100%;
        max-height: 100%;
        background-color: #f0f0f5;
        font-family: Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    input, button, textarea{
        font-family: Arial, Helvetica, sans-serif;
    }

    button{
        cursor: pointer;
    }
`;
