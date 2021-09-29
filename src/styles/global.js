import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --red: #e63946;
    --red-dark: #da1b2b;
    --white: #f1faee;
    --black: #0c0d0d;
    --gray: #bdbdbd;
    --gray-dark: #626262;
    --primary-light: #a8dadc;
    --primary: #457b9d;
    --primary-dark: #1d3557;
  }

  * {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--primary);
    color: var(--black);
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`;
