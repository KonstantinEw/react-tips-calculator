import { StyledCustomSelect } from './styledSelect';
import { OnChangeValue } from 'react-select';

interface IOption {
    value: string,
    label: string,
}

interface IProps {
    value: string,
    onChange: (newValue: string) => void
}

const options: IOption[] = [
    { value: '10%', label: '10%' },
    { value: '15%', label: '15%' },
    { value: '20%', label: '20%' }
]

export const CustomSelect = ({ value, onChange }: IProps) => {
    const getPercent = (value: string): IOption | undefined => {
        return value ? options.find(percent => percent.value === value) : undefined;
    }
    const handleOnChange = (newValue: OnChangeValue<IOption, boolean>) => {
        onChange((newValue as IOption).value)
    }
    return (
        <StyledCustomSelect options={options}
            isSearchable={false}
            classNamePrefix={'Select'}
            placeholder={value}
            onChange={handleOnChange}     //Я не победил эту типизацию
            value={getPercent} />
    )
}