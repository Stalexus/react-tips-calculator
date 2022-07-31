import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

body {
    font-family: 'Noto Sans', 'sans-serif';
    background-color: #EAF2F2;
    color: #000000;
  }
`;