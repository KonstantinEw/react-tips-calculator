import { createGlobalStyle } from "styled-components"

export const Global = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}
body{
    width: 100%;
    height:100vh;
    background-color: #77E0D1;
    display:flex;
    justify-content: center;
    align-items: center;
}
`

