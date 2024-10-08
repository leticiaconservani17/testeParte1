import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  #root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #FFF8F2;
    color: #E66767;
  }

`

export default GlobalStyle
