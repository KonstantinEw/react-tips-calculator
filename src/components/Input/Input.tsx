import { ChangeEvent } from 'react'
import { StyledInput } from './inputStyle'

interface IProps {
    placeholder: string,
    value: string,
    onChange: (value: string) => void,
    name: string,
}

export const Input = ({ placeholder, value, onChange, name }: IProps) => {
    const handleValues = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.value)
    }
    return (
        <StyledInput type='text'
            name={name} onChange={handleValues}
            value={value}
            placeholder={placeholder}>
        </StyledInput>
    )
}