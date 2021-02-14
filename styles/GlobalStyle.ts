import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  :root {
    --blue-dark: #383E71;
    --blue-light: #989FDB;
    --purple: #9626AC;
  }

  *, *::after, *::before {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }

  input, button {
    outline: 0 none;
  }
`

export default GlobalStyle
