import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { IAppState, IUserReducer, IUserSummary } from '../../utils/interfaces'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import ActivityCard from '../ActivityCard'
import CarrierStatusCard from '../CarrierStatusCard'
import UserDetailsCard from '../UserDetailsCard'
import UserGenderCard from '../UserGenderCard'
import styles from './useroverview.module.scss'

const obj = {
  id: 12345678,
  first_name: 'Joseph',
  last_name: 'Smith',
  photo_url: null,
  gender: 'male',
  birth_date: '1975-06-18',
  home_phone: '248-555-1000',
  mobile_phone: '248-555-3000',
  work_phone: '248-555-2000',
  email: 'joe.smith@testemail.com',
  activity: {
    sms: 6,
    email: 4,
    orders: 1,
  },
  carrier_status: {
    since: '2006-06-02T21:00:00.000Z',
    status: 'IN',
  },
}

type UserOverviewProp = {
  userSummary?: IUserReducer
}

function UserOverview({ userSummary }: UserOverviewProp) {
  const [isLoading, setIsLoading] = useState<undefined | boolean>(false)
  const [userData, setUserData] = useState<IUserSummary>()

  useEffect(() => {
    setIsLoading(userSummary?.loading)
    setUserData(userSummary?.data)
  }, [userSummary?.data])
  return (
    <div className={styles.userOverview}>
      <div className={styles.userOverview_col1}>
        {userSummary?.loading ? (
          <SkeletonTheme color="#f7f9fc" highlightColor="#ffffff">
            <Skeleton duration={2} height={180} />
          </SkeletonTheme>
        ) : (
          <UserGenderCard
            gender={userData?.gender || ''}
            dob={userData?.birth_date || ''}
          />
        )}
      </div>
      <div className={styles.userOverview_col2}>
        {userSummary?.loading ? (
          <SkeletonTheme color="#f7f9fc" highlightColor="#ffffff">
            <Skeleton duration={2} height={180} />
          </SkeletonTheme>
        ) : (
          <UserDetailsCard
            id={userData?.id || ''}
            email={userData?.email || ''}
            mobile_phone={userData?.mobile_phone || ''}
            home_phone={userData?.home_phone || ''}
            work_phone={userData?.work_phone || ''}
          />
        )}
      </div>
      <div className={styles.userOverview_col3}>
        {userSummary?.loading ? (
          <SkeletonTheme color="#f7f9fc" highlightColor="#ffffff">
            <Skeleton duration={2} height={180} />
          </SkeletonTheme>
        ) : (
          <>
            {' '}
            <div className={styles.userOverview_col3Title}>
              90-DAY COMMUNICATION ACTIVITY
            </div>
            <div className={styles.userOverview_col3Grid}>
              <ActivityCard
                activityType="sms"
                activityValue={userData?.activity?.sms || ''}
              />
              <ActivityCard
                activityType="Email"
                activityValue={userData?.activity?.email || ''}
              />
              <ActivityCard
                activityType="Orders"
                activityValue={userData?.activity?.orders || ''}
              />
            </div>
          </>
        )}
      </div>

      <div className={styles.userOverview_col4}>
        <div className={styles.userOverview_col4Title}>
        SMS CARRIER STATUS
        </div>
        <div className={styles.userOverview_col4Grid}>
          <ActivityCard
            activityType={`SINCE ${new Date(
              userData?.carrier_status?.since || '',
            ).getFullYear()}`}
            activityValue={userData?.carrier_status?.status || ''}
            style={styles.smsStatus}
          />
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ userSummary }: IAppState) => ({
  userSummary,
})
export default connect(mapStateToProps, null)(UserOverview)
