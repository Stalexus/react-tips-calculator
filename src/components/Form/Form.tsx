import { FormEvent, useEffect, useState } from 'react';
import { ITipsOption } from '../../types';
import { Button } from '../Button/Button';
import { CustomSelect } from '../CustomSelect/Select';
import { Input } from '../Input/Input';
import { Total, StyledForm, Description, Title } from './styles';

export const Form = () => {
    const [bill, setBill] = useState('');
    const [people, setPeople] = useState('');
    const [tips, setTips] = useState<ITipsOption>({ value: 10, label: "10%" });
    const [total, setTotal] = useState(0);
    const [disabled, setButton] = useState(true);

    const calculateTips = (billStr: string, peopleStr: string): number => {
        const bill = Number(billStr);
        const people = Number(peopleStr);
        return ((bill * tips.value) / 100) * people;
    };

    const handleSelect = (option: ITipsOption | null): void => {
        if (option) {
            setTips(option);
        }
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        setTotal(calculateTips(bill, people));
    };

    const handlePeople = (value: string): void => {
        setPeople(value);
    };

    const handleButton = (value: boolean): void => {
        setButton(value);
    };

    const handleBill = (value: string): void => {
        setBill(value);
    };

    useEffect((): void => {
        if (bill && people) {
            return handleButton(false);
        } else {
            return handleButton(true);
        }
    }, [bill, people]);

    return (
        <StyledForm onSubmit={handleSubmit}>
            <Title>Welcome to App</Title>
            <Description>Let's go calculate your tips</Description>
            <Input placeholder="Enter bill" type="number" value={bill} onChange={handleBill} />
            <Input placeholder="Enter persons" type="number" value={people} onChange={handlePeople} />
            <CustomSelect tips={tips} handleSelect={handleSelect} />
            <Total>Total: {total.toFixed(2)} $</Total>
            <Button disabled={disabled} />
        </StyledForm>
    )
}