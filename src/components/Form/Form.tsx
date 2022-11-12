import { useState } from 'react'
import { Button } from '../Button/Button'
import { CustomSelect } from '../CustomSelect/CustomSelect'
import { Input } from '../Input/Input'
import { Total, Title, SubTitle, FormWrapper } from './formStyle'

export const Form = () => {
    const [bill, setBill] = useState('');
    const [persons, setPersons] = useState('');
    const [total, setTotal] = useState(0);
    const [isDisablet, setDisabled] = useState(true)

    return (
        <FormWrapper onSubmit={() => { }}>
            <Title>Welcome to App</Title>
            <SubTitle>Let`s go calculate your tips</SubTitle>
            <Input name='bill' onChange={setBill} value={bill} placeholder='Enter bill' />
            <Input name='persons' onChange={setPersons} value={persons} placeholder='Enter  persons' />
            <CustomSelect />
            <Total>Total: {total.toFixed(2)}</Total>
            <Button isDisablet={isDisablet} />
        </FormWrapper>
    )
}

