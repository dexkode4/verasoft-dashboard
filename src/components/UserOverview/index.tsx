import React from 'react'
import UserGenderCard from '../UserGenderCard'
import styles  from './useroverview.module.scss'
function UserOverview() {
    return (
        <div className={styles.userOverview}>
            <div className={styles.userOverview__col1}>
              <UserGenderCard gender="male" dob={new Date('1975-06-18')}/>
            </div>
            <div className={styles.userOverview__col2}>

            </div>
            <div className={styles.userOverview__col3}>

            </div>
        </div>
    )
}

export default UserOverview
