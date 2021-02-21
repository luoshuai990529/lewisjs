import React from 'react';
const {default:styles} = require('./index.less');


interface PropsType {
    className?: string,
    disabled?: boolean,
    style?:object,
    type?:string,
    onClick: (event: React.MouseEvent) => void,
}

const Button:React.FC<PropsType> = (props) => {
    const { children, className, disabled, style,type , onClick } = props;
    // 拼装样式
    let classNameList = [styles.button];
    if (className) classNameList.push(className);
    if (type) classNameList.push(styles[type]);
    if (disabled) classNameList = classNameList.concat([styles.disabled, 'disabled-btn']);
    return (
        <button style={style} className={classNameList.join(' ')} onClick={(e) => {
            if (!disabled) onClick(e);
        }}><span>{children}</span></button>
    )
}
Button.defaultProps = {
    className:'',
    disabled:false
}
export default Button