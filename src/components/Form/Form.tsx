import { FormEvent, useEffect, useState } from 'react';
import { ITipsOption } from '../../types';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/Select';
import { Input } from '../Input/Input';
import { Total, StyledForm, Description, Title } from './styles';
import { useInput } from "../../hooks/useInput";

export const Form = () => {
    const bill = useInput();
    const people = useInput();

    const [tips, setTips] = useState<ITipsOption>({ value: 10, label: "10%" });
    const [total, setTotal] = useState(0);
    const [disabled, setButton] = useState(true);

    const calculateTips = () => {
        const billValue = Number(bill.value);
        const peopleValue = Number(people.value);
        return ((billValue * tips.value) / 100) * peopleValue;
    };

    const handleSelect = (option: ITipsOption | null): void => {
        if (option) {
            setTips(option);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setTotal(calculateTips());
    };

    const handleButton = (value: boolean): void => {
        setButton(value);
    };

    useEffect(() => {
        if (bill && people) {
            handleButton(false);
        } else {
            handleButton(true);
        }
    }, [bill, people]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title>Welcome to App</Title>
            <Description>Let's go calculate your tips</Description>
            <Input placeholder="Enter bill" type="number" {...bill} />
            <Input placeholder="Enter persons" type="number" {...people} />
            <CustomSelect tips={tips} handleSelect={handleSelect} />
            <Total>Total: {total.toFixed(2)} $</Total>
            <Button isDisabled={disabled} />
        </StyledForm>
    )
}