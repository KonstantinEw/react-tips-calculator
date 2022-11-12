import { StyledButton } from './buttonStyle'
interface IProps {
    isDisabled: boolean
}

export const Button = ({ isDisabled }: IProps) => {
    return (
        <StyledButton disabled={isDisabled} type='submit'>Ohhhoooo 🍻 </StyledButton>
    )
}
