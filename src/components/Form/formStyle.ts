import styled from "styled-components"

const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

const Title = styled.h1`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 40px;
    font-weight: 400;
    line-height: 58px;
    text-align: center;
    margin-bottom: 40px;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

const SubTitle = styled.h3`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 32px;
    font-weight: 400;
    text-align: center;
    color: #756C6C91;
    margin-bottom: 45px;
    @media (max-width: 768px) {
        font-size: 24px;
    }
`

const Total = styled.p`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    margin-bottom: 45px;
    @media (max-width: 480px) {
        font-size: 18px;
    }
`
export { Total, SubTitle, Title, FormWrapper }