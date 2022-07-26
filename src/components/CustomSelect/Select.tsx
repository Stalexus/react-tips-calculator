import Select from 'react-select';
import { ISelect } from "../../types";
import { selectStyles } from './styles';

export const CustomSelect = ({ onChange, value, options }: ISelect) => {
    return (
        <Select onChange={onChange} value={value} options={options} styles={selectStyles} />
    )
}