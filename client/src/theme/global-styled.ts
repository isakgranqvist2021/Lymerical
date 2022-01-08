import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body, html {
        width: 100%;
        overflow-x: hidden; 
        font-family: 'Roboto', sans-serif;
        scroll-behavior: smooth;
     }

    input,
    textarea,
    select {
        font-family: Arial, Helvetica, sans-serif;
    }   

    p {
        line-height: 1.4;
    }
`;
