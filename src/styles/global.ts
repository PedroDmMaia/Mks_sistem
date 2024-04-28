import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
    }

    body {
        --webkit-font-smoothing: antialiased;
        color: #2C2C2C;
    }

    button {
      border: none;
      cursor: pointer;
      line-height: 0;
    }
`
