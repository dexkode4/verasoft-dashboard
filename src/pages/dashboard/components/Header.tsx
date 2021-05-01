import React from 'react'
import Button from '../../../components/Button'
import styles from '../dashboard.module.scss'
import { BsStar } from 'react-icons/bs'

type HeaderProp = {
  name?: string
}

const Header = ({ name }: HeaderProp) => {
  return (
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeader_title}>
        <div className={styles.dashboardHeader_title__img}>
          <BsStar />
        </div>
        <header>{name}</header>
      </div>
      <Button title="New Order" size="bg" />
    </div>
  )
}

export default Header
