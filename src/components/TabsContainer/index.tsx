import React from 'react'
import Tab from '../Tab';
import styles from './tabsContainer.module.scss';

function TabsContainer() {
    return (
        <div className={styles.tabContainer}>
           <Tab title="ORDERS A" value="A"/>
           <Tab title="ORDERS AA" value="A"/>
           <Tab title="ORDERS AAA" value="A"/>
           <Tab title="ORDERS B" value="A"/>
           <Tab title="ORDERS C" value="A"/>
        </div>
    )
}

export default TabsContainer
