import { StyledCustomSelect } from './styledSelect'

interface IOptions {
    value: string,
    label: string,
}

interface IProps {
    value: string,
    onChange: (newValue: any) => void
}

const options: IOptions[] = [
    { value: '10%', label: '10%' },
    { value: '15%', label: '15%' },
    { value: '20%', label: '20%' }
]

export const CustomSelect = ({ value, onChange }: IProps) => {

    const getPercent = () => {
        return value ? options.find(percent => percent.value === value) : ''
    }
    const getOnChange = (newValue: any) => {
        onChange(newValue.value)
    }

    return (
        <StyledCustomSelect options={options}
            isSearchable={false}
            classNamePrefix={'Select'}
            placeholder={value}
            onChange={getOnChange}
            value={getPercent} />
    )
}