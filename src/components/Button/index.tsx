import React from 'react'
import cx from 'classnames';

import styles from './button.module.scss';


type ButtonProps = {
    title?: string,
    handleClick?: () => void,
    customStyle?: any,
    size: any
}

const determineButtonSize = (size: string) => {
    switch(size){
        case 'bg': 
            return styles.button__big
        case 'sm': 
            return styles.button__small
        default:
            return styles.button__big
    }
}

const Button = ({title, handleClick, size}: ButtonProps) => {
    return (
        <button className={cx(styles.button, determineButtonSize(size))} onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button
