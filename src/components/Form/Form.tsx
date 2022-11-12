import { FormEvent, useState } from 'react'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Input } from '../Input/Input'
import { Total, Title, SubTitle, FormWrapper } from './formStyle'

export const Form = () => {
    const [bill, setBill] = useState('');
    const [persons, setPersons] = useState('');
    const [total, setTotal] = useState(0);
    const [isDisabled, setDisabled] = useState(true)
    const [percentTips, setPercentTips] = useState('10%')

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const total = (+bill * +persons / 100) * parseInt(percentTips);
        setTotal(total)
    }

    return (
        <FormWrapper onSubmit={handleSubmit}>
            <Title>Welcome to App</Title>
            <SubTitle>Let`s go calculate your tips</SubTitle>
            <Input name='bill' onChange={setBill} value={bill} placeholder='Enter bill' />
            <Input name='persons' onChange={setPersons} value={persons} placeholder='Enter  persons' />
            <CustomSelect value={percentTips} onChange={setPercentTips} />
            <Total>Total: {total.toFixed(2)}</Total>
            <Button isDisabled={!bill || !persons} />
        </FormWrapper>
    )
}

