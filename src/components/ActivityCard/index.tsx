import React from 'react';
import styles from 'activityCard.module.scss';
import { IActivityCard } from '../../interfaces';

const obj = {
    "activity": {
          "sms": 6,
          "email": 4,
          "orders": 1
      }
  }


function ActivityCard({activityType,  activityValue}: IActivityCard) {
    return (
        <div className={styles.activityCard}>
            <h1 className={styles.activityCard__value}>{activityValue}</h1>
            <div className={styles.activityCard__footer}>
                <span>{activityType}</span>
            </div>
        </div>
    )
}

export default ActivityCard
