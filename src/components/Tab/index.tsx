import React from 'react'
import cx from 'classnames';
import styles from './tab.module.scss';
import { ITab } from '../../utils/interfaces'

function Tab({title, value, handleActive, active}: ITab) {
    return (
        <div className={cx(styles.tab, active === value && styles.tab__selected)}
        onClick={() => handleActive(value) }>
            {title}
        </div>
    )
}

export default Tab
