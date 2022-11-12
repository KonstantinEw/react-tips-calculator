import { isDisabled } from '@testing-library/user-event/dist/utils'
import { StyledButton } from './buttonStyle'

interface IProps {
    isDisabled: boolean
}

export const Button = ({ isDisabled }: IProps) => {
    const handleIsDisablet = () => {

    }
    return (
        <StyledButton disabled={isDisabled} type='submit'>Ohhhoooo 🍻 </StyledButton>
    )
}
