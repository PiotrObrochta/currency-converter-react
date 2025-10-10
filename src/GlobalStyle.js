import { createGlobalStyle } from "styled-components";
import waluty from "./waluty.jpg";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

  body {
    background-image: url("${waluty}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
    margin: 0;
}

`;
