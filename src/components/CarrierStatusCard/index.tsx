import React from 'react'
import { ICarrierStatusCard } from '../../utils/interfaces';
import styles from './carrierStatusCard.module.scss';

function CarrierStatusCard({date, status, title}: ICarrierStatusCard) {
    return (
        <div className={styles.carrierStatusCard}>
            <header>{title}</header>
            <h1>{status}</h1>
             <div className={styles.carrierStatusCard__footer}>
                <span>SINCE {date.getFullYear()}</span>
            </div>
        </div>
    )
}

export default CarrierStatusCard
