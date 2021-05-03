import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changeTab } from '../../redux/actionCreators';
import Tab from '../Tab'
import styles from './tabsContainer.module.scss'


const filterData = (data: any, accessor: string) => {
  let store = []
  for (const property in data) {
    if (property === accessor) {
      store.push(property)
    }
  }

  return store
}


function TabsContainer() {
  const [active, setActive] = useState('orders_AAA')
  const dispatch =  useDispatch()
  const handleActive = (value: string) => {
      setActive(value)
      dispatch(changeTab(value))
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
