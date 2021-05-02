import React from 'react'
import ActivityCard from '../ActivityCard'
import CarrierStatusCard from '../CarrierStatusCard';
import UserGenderCard from '../UserGenderCard'
import styles  from './useroverview.module.scss';


const obj = {
    "activity": {
          "sms": 6,
          "email": 4,
          "orders": 1
      },
      "carrier_status": {
        "since": "2006-06-02T21:00:00.000Z",
        "status": "IN"
    }
  }
function UserOverview() {
    return (
        <div className={styles.userOverview}>
            <div className={styles.userOverview_col1}>
              <UserGenderCard gender="male" dob={new Date('1975-06-18')}/>
            </div>
            <div className={styles.userOverview_col2}>

            </div>
            <div className={styles.userOverview_col3}>
                <div className={styles.userOverview_col3Title}>
                90-DAY COMMUNICATION ACTIVITY
                </div>

                <div className={styles.userOverview_col3Grid}>
                        <ActivityCard activityType="sms" activityValue={obj.activity.sms}/>
                        <ActivityCard activityType="Email" activityValue={obj.activity.email}/>
                        <ActivityCard activityType="Orders" activityValue={obj.activity.orders}/>
                </div>

            </div>

            <div className={styles.userOverview_col4}>
                <CarrierStatusCard date={new Date(obj.carrier_status.since)} status={obj.carrier_status.status} title='SMS CARRIER STATUS'/>
            </div>
        </div>
    )
}

export default UserOverview
