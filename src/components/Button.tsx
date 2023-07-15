// type PropsButtonType = {
//     name: string,
//     callBack: () => void
//     disabled: boolean
// }

import {ComponentProps} from "react";
import clsx from "clsx";

type ButtonPropsType = {
    name: string
} & ComponentProps<'button'>

export const Button = ({name, className, ...props}: ButtonPropsType) => {
    return (
        // <button className={`buttons ${className ? className : ''}`} {...props}>{name}</button>
    <button className={clsx('buttons', className, props.disabled && 'disabled')} {...props}>{name}</button>
    )
}

// clsx, classnames