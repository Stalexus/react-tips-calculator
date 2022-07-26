export interface IOption {
    value: number;
    label: string;
}

export interface IInput {
    placeholder: string;
    type: string;
}

export interface ISelect {
    onChange: (newValue: any) => void;
    value: IOption | undefined | "";
    options: IOption[];
}