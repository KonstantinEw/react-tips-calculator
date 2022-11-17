import { StyledCustomSelect } from './styledSelect';
import { ActionMeta, OnChangeValue, SingleValue } from 'react-select';

interface IProps {
    value: string,
    onChange: (newValue: string) => void
}

export const CustomSelect = ({ value, onChange }: IProps) => {

    interface IOption {
        value: string,
        label: string,
    }

    const options: IOption[] = [
        { value: '10%', label: '10%' },
        { value: '15%', label: '15%' },
        { value: '20%', label: '20%' }
    ]

    const getPercent = (value: string): IOption | undefined => {
        return options.find(percent => percent.value === value);
    }
    const handleOnChange = (newValue: any) => {
        if (options) return onChange(newValue.value)
    }
    return (
        <StyledCustomSelect options={options}
            isSearchable={false}
            isMulti={false}
            classNamePrefix={'Select'}
            placeholder={value}
            onChange={handleOnChange}
            value={getPercent} />
    )
}