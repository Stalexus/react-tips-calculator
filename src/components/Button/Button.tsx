import { StyledButton } from "./styles";

interface IProps {
    disabled: boolean;
}

export const Button = ({ disabled }: IProps) => {
    return (
        <StyledButton type="submit" disabled={disabled}>Ohhhoooo 🍻</StyledButton>
    )
}