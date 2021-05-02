import React from 'react'
import styles from './tab.module.scss';
import { ITab } from '../../interfaces'

function Tab({title, value}: ITab) {
    return (
        <div className={styles.tab}>
            {title}
        </div>
    )
}

export default Tab
