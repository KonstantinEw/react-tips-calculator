import React from 'react'
import { StyledButton } from './buttonStyle'

interface IProps {
    isDisablet: boolean
}

export const Button = ({ isDisablet }: IProps) => {
    return (
        <StyledButton disabled={isDisablet} type='submit'>Ohhhoooo 🍻 </StyledButton>
    )
}
