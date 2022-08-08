import styled from "styled-components";

export const StyledButton = styled.button`
    font-size: 24px;
    line-height: 35px;
    text-align: center;
    background-color:#2ED2C9;
    padding: 13px 140px;
    border: none;
    color: #FFF;
    margin-top: 45px;
    margin-bottom: 45px;
    cursor: pointer;
    opacity: ${({ disabled }) => ( disabled ? '0.5' : '1' )};
    @media (max-width: 576px) {
        padding: 13px 100px;
    }
`