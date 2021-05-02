import React from 'react'
import { FaRegUser, FaRegBuilding } from 'react-icons/fa'
import {AiOutlineMobile} from 'react-icons/ai'
import {VscHome} from 'react-icons/vsc';
import { IUserSummary } from '../../utils/interfaces';
import styles from './userDetailsCard.module.scss';

type UserDetailsCardProp = {
    id: number | string,
    home_phone: string,
    mobile_phone: string,
    work_phone: string,
    email: string,
}

function UserDetailsCard({id, mobile_phone, home_phone, work_phone, email}: UserDetailsCardProp) {
    return (
        <div className={styles.userDetails}>
            <div className={styles.userDetails_item}>
                <FaRegUser/>
                <span>#{id}</span>
            </div>
            <div className={styles.userDetails_item}>
                <AiOutlineMobile/>
                <span>{mobile_phone}</span>
            </div>
            <div className={styles.userDetails_item}>
                <FaRegBuilding/>
                <span>{work_phone}</span>
            </div>
            <div className={styles.userDetails_item}>
                <VscHome/>
                <span>{home_phone}</span>
            </div>
            <div className={styles.userDetails_item}>
                <div>@</div>
                <span>{email}</span>
            </div>
        </div>
    )
}

export default UserDetailsCard
