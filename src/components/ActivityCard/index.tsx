import React from 'react';
import cx from 'classnames';
import styles from './activityCard.module.scss';
import { IActivityCard } from '../../utils/interfaces';



function ActivityCard({activityType,  activityValue, style}: IActivityCard) {
    return (
        <div className={cx(styles.activityCard, style)}>
            <h1 className={styles.activityCard__value}>{activityValue}</h1>
            <div className={styles.activityCard__footer}>
                <span>{activityType}</span>
            </div>
        </div>
    )
}

export default ActivityCard
