import styled from 'styled-components'

export const StyledCustomSelect = styled.select`
    height: 68px;
    width: 456px;
    background: #FFFFFF;
    border-radius: 30px;
    margin-bottom: 33px;
    border: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align:center;
    @media (max-width: 768px) {
        width: 331px;
    }

    
    &::placeholder {
    opacity: 0.4;
    text-align: center;
    color: #756C6C;
    }
    &:focus {
        outline: none;
    }
`