import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    color: #332c36;
    padding: 0;
    margin: 0;
    @font-face {
      font-family: New Tegomin', serif;
      src: url("./NewTegomin-Regular.ttf") format("truetype");
    }
  }
`;
