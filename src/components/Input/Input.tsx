import { ChangeEventHandler } from 'react';
import { StyledInput } from './styles';

interface IProps {
    placeholder: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, type, value, onChange }: IProps) => {
    return (
        <StyledInput type={type} placeholder={placeholder} value={value} onChange={onChange} />
    );
};