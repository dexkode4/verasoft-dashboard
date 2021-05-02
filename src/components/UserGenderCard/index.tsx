import React from 'react'
import styles from './userdisplay.module.scss'
import { FaRegUser } from 'react-icons/fa'

type UserGenderCardProp = {
  gender: string
  dob: string
}

const calculateAge = (date: string) => {
  let currYear = new Date()
  let dob = new Date(date)
  return currYear.getFullYear() - dob.getFullYear() || ''
}

function UserGenderCard({ gender, dob }: UserGenderCardProp) {
  return (
    <div className={styles.user}>
      <div className={styles.userIcon}>
        <FaRegUser />
      </div>
      <p>
        {gender} - {calculateAge(dob)}
      </p>
    </div>
  )
}

export default UserGenderCard
