import { StyledInput } from './styles';
import { IInput } from "../../types/";

export const Input = ({ placeholder, type }: IInput) => {
    return (
        <StyledInput placeholder={placeholder} type={type} />
    )
}