import React, { useState } from 'react'
import Tab from '../Tab'
import styles from './tabsContainer.module.scss'

function TabsContainer() {
  const [active, setActive] = useState('orders_AAA')
  const handleActive = (value: string) => {
      setActive(value)
  }
  return (
    <div className={styles.tabContainer}>
      <Tab title="ORDERS A" value="orders_A"  handleActive={handleActive} active={active} />
      <Tab title="ORDERS AA" value="orders_AA" handleActive={handleActive} active={active}/>
      <Tab title="ORDERS AAA" value="orders_AAA" handleActive={handleActive} active={active}/>
      <Tab title="ORDERS B" value="orders_B" handleActive={handleActive} active={active}/>
      <Tab title="ORDERS C" value="orders_C" handleActive={handleActive} active={active}/>
    </div>
  )
}

export default TabsContainer
