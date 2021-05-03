import React from 'react';
import { useDispatch, useSelector } from 'react-redux'

import Button from '../../../components/Button'
import styles from '../dashboard.module.scss'
import { BsStar } from 'react-icons/bs'
import { openModal } from '../../../redux/actionCreators/modal';
import Modal from '../../../components/Modal';

type HeaderProp = {
  name?: string
}

const Header = ({ name }: HeaderProp) => {
  const dispatch = useDispatch()
  return (
    <>
    <div className={styles.dashboardHeader}>
      <div className={styles.dashboardHeader_title}>
        <div className={styles.dashboardHeader_title__img}>
          <BsStar />
        </div>
        <header>{name}</header>
      </div>
      <Button title="New Order" size="bg" handleClick={() => dispatch(openModal())} />
    </div>
    {
     <Modal/>

    }
    </>
  )
}

export default Header
