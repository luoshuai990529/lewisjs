import React from 'react';
interface PropsType {
    className?: string;
    disabled?: boolean;
    style?: object;
    type?: string;
    onClick: (event: React.MouseEvent) => void;
}
declare const Button: React.FC<PropsType>;
export default Button;
