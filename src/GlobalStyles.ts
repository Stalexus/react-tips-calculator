import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
        background: #EAF2F2;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        color: #000;
            &::after {
                content: '';
                position: absolute;
                top: -138px;
                left: -20px;
                background:rgba(133, 211, 202, 0.31);
                width: 250px;
                height: 250px;
                border-radius: 50%;
            }
            &::before {
                content: '';
                position: absolute;
                top: -50px;
                left: -120px;
                background:rgba(133, 211, 202, 0.31) ;
                width: 250px;
                height: 250px;
                border-radius: 50%;
            }
}
`;