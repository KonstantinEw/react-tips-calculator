import styled, { createGlobalStyle } from "styled-components"

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
const AppWrapper = styled.div`
    position:relative;
    display: flex;
    justify-content:center;
    width: 1512px;
    background: #EAF2F2;
    padding: 203px 0px 138px 0px;

    @media (max-width: 768px) {
        width: 744px;
        }

        @media (max-width: 480px) {
        width: 414px;
        }
    `
const BgImageWrapper = styled.div`
    position:absolute;
    top:0;
    left:0;
`
export { BgImageWrapper, AppWrapper }