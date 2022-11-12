import styled from 'styled-components'
import Select from 'react-select'

export const StyledCustomSelect = styled(Select)`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-align:center;
    &:focus {
                outline: none;
    }
    .Select__control {
        height: 68px;
        width: 456px;
        background: #FFFFFF;
        border-radius: 30px;
        border: none;
            @media (max-width: 768px) {
            width: 331px;
        }
    }
    .Select__indicator-separator {
        display:none;
    }
`