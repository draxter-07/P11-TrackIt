import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 375px;
        height: 667px;
        font-family: 'Lexend Deca', sans-serif;
        & div{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
        }
    }
`

export default GlobalStyle